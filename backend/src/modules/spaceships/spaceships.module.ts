import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { SpaceshipsController } from './controller/spaceships.controller';
import { SpaceshipsService } from './service/spaceships.service';
import { spaceshipsProviders } from './spaceships.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SpaceshipsController],
  providers: [
    SpaceshipsService,
    ...spaceshipsProviders
  ]
})
export class SpaceshipsModule { }
