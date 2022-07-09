import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
  createCar(@Body() car: CreateCarDto) {
    return this.carService.createCar(car);
  }
}
