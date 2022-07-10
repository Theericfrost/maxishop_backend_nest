import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/authentication/guards/isAdmin-authentication.guard';
import JwtAuthenticationGuard from 'src/authentication/guards/jwt-authentication.guard';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/CreateCarDto.dto';

@Controller('api/car')
@ApiTags('Car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  @UseGuards(IsAdminGuard)
  createCar(@Body() car: CreateCarDto) {
    return this.carService.createCar(car);
  }
}
