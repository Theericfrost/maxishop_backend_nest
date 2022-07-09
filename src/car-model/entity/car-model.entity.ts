import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import Car from '../../car/entity/car.entity';

@Entity()
class CarModel {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id?: number;

  @Column()
  @ApiProperty()
  public title: string;

  @OneToMany(() => Car, (car: Car) => car.model)
  @JoinColumn()
  public cars: Car[];
}

export default CarModel;
