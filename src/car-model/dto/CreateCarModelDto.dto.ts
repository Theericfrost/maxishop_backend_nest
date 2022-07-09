import { ApiProperty } from '@nestjs/swagger';

class CreateCarModelDto {
  @ApiProperty()
  public title: string;
}

export default CreateCarModelDto;
