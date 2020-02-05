import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class BaseInterface extends Document {
  @ApiProperty({
    description: 'Unique identifier'
  })
  id?: string;

  @ApiProperty({
    description: 'Creation Date'
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Update Date'
  })
  updatedAt?: Date;
}
