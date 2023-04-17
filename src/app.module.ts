import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiModule } from './open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OpenAiModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
