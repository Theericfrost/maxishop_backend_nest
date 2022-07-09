import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelModule } from 'src/car-model/car-model.module';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import Car from './entity/car.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Car]), CarModelModule],
  controllers: [CarController],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
