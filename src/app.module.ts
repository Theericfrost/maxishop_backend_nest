import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CarModule } from './car/car.module';
import { CarModelModule } from './car-model/car-model.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PostModule,
    UserModule,
    AuthenticationModule,
    CarModule,
    CarModelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
