import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateCarModelDto from './dto/CreateCarModelDto.dto';
import CarModel from './entity/car-model.entity';

@Injectable()
export class CarModelService {
  constructor(
    @InjectRepository(CarModel)
    private carModelRepository: Repository<CarModel>,
  ) {}

  getAllModels() {
    return this.carModelRepository.find({ relations: ['cars'] });
  }

  getModelByTitle(title: string) {
    return this.carModelRepository.findOne({ where: { title } });
  }

  async createModel(model: CreateCarModelDto) {
    await this.carModelRepository.create(model);
    const newModel = await this.carModelRepository.save(model);
    return newModel;
  }
}
