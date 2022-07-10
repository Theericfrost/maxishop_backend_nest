import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/authentication/guards/isAdmin-authentication.guard';
import JwtAuthenticationGuard from 'src/authentication/guards/jwt-authentication.guard';
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
  @UseGuards(JwtAuthenticationGuard)
  @UseGuards(IsAdminGuard)
  createModel(@Body() model: CreateCarModelDto) {
    return this.carModelService.createModel(model);
  }
}
