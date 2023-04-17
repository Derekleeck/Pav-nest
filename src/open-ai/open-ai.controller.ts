import { Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post('/message')
  getModelAnswer(@Body() data: GetAiModelAnswer) {
    return this.openAiService.getModelAnswer(data.question);
  }
}
