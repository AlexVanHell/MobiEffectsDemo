import { ApiProperty } from '@nestjs/swagger';
import { BaseInterface } from '../../../common/interface/base.interface';

export class Spaceship extends BaseInterface {
  @ApiProperty({
    description: 'Spaceship name'
  })
  name?: string;

  @ApiProperty({
    description: 'Spaceship speed in km/h'
  })
  speed?: number;
}
