import { ApiProperty } from '@nestjs/swagger';

export class CreateSpaceShipDto {
  @ApiProperty({
    description: 'Spaceship name'
  })
  name?: string;

  @ApiProperty({
    description: 'Spaceship speed in km/h'
  })
  speed?: number;
}