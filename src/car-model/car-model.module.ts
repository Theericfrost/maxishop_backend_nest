import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelController } from './car-model.controller';
import { CarModelService } from './car-model.service';
import CarModel from './entity/car-model.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([CarModel])],
  controllers: [CarModelController],
  providers: [CarModelService],
  exports: [CarModelService],
})
export class CarModelModule {}
