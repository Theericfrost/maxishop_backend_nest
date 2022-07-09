import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarModelService } from 'src/car-model/car-model.service';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/CreateCarDto.dto';
import Car from './entity/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car) private carRepository: Repository<Car>,
    private readonly carModelService: CarModelService,
  ) {}

  getAllCars() {
    return this.carRepository.find({ relations: ['model'] });
  }

  async createCar(car: CreateCarDto) {
    const newCar = await this.carRepository.create(car);
    if (typeof car.model === 'string') {
      try {
        const model = await this.carModelService.getModelByTitle(car.model);
        if (model) {
          await this.carRepository.save({ ...car, model: model });
        } else {
          const newModel = await this.carModelService.createModel({
            title: car.model,
          });
          await this.carRepository.save({ ...car, model: newModel });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      await this.carRepository.save(car);
    }

    return newCar;
  }
}
