import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseMiddleware } from './middleware/response.middleware';
import { SpaceshipsController } from './modules/spaceships/controller/spaceships.controller';
import { SpaceshipsModule } from './modules/spaceships/spaceships.module';

@Module({
  imports: [SpaceshipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ResponseMiddleware)
      .forRoutes(SpaceshipsController)
  }
}
