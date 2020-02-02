import { Connection } from 'mongoose';
import { SpaceshipModel } from '../../model/spaceship.schema';

export const spaceshipsProviders = [
  {
    provide: 'SPACESHIP_MODEL',
    useFactory: (connection: Connection) => connection.model('Spaceship', SpaceshipModel),
    inject: ['DATABASE_CONNECTION']
  }
];