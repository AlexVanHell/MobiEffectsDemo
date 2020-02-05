import * as mongoose from 'mongoose';
import { settings } from '../config';

const config = settings.db;
const connectionUri = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.name}`

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(connectionUri, {
        useNewUrlParser: true
      }),
  },
];