import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id?: number;

  @Column({ unique: true })
  @ApiProperty()
  public email: string;

  @Column()
  @ApiProperty()
  public name: string;

  @Column()
  @ApiProperty()
  public password: string;

  @Column()
  @ApiProperty()
  public isAdmin: boolean;
}

export default User;
