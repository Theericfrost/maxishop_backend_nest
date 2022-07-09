import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarModelService } from './car-model.service';
import CreateCarModelDto from './dto/CreateCarModelDto.dto';

@Controller('api/car-model')
@ApiTags('Car-Model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Get()
  getAllModels() {
    return this.carModelService.getAllModels();
  }

  @Post()
  createModel(@Body() model: CreateCarModelDto) {
    return this.carModelService.createModel(model);
  }
}
