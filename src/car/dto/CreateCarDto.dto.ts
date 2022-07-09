import { ApiProperty } from '@nestjs/swagger';
import CarModel from 'src/car-model/entity/car-model.entity';

export class CreateCarDto {
  @ApiProperty()
  public model: CarModel;

  @ApiProperty()
  public color: string;

  @ApiProperty()
  public fuel: string;

  @ApiProperty()
  public price: string;

  @ApiProperty()
  public discount: string;

  @ApiProperty()
  public img_card: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public creationYear: string;
}
