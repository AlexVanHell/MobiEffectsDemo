import { ApiProperty } from '@nestjs/swagger';

export class BaseDto {
  @ApiProperty({
    description: 'Object identifier'
  })
  id: string;

  @ApiProperty({
    description: 'Creation date',
    example: new Date().toISOString()
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Update date',
    example: new Date().toISOString()
  })
  updatedAt: Date;
}
