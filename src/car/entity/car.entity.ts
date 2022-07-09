import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import CarModel from 'src/car-model/entity/car-model.entity';

@Entity()
class Car {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id?: number;

  @ManyToOne(() => CarModel, (model: CarModel) => model.title)
  @JoinColumn()
  @ApiProperty()
  public model: CarModel;

  @Column()
  @ApiProperty()
  public color: string;

  @Column()
  @ApiProperty()
  public title: string;

  @Column()
  @ApiProperty()
  public fuel: string;

  @Column()
  @ApiProperty()
  public price: string;

  @Column()
  @ApiProperty()
  public discount: string;

  @Column()
  @ApiProperty()
  public img_card: string;

  @Column()
  @ApiProperty()
  public description: string;

  @Column()
  @ApiProperty()
  public creationYear: string;
}

export default Car;
