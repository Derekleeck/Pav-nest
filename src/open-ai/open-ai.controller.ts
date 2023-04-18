import { Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';
import { MESSAGE, OPEN_AI_API } from 'src/common/constants/apis-url';

@Controller(OPEN_AI_API)
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post(MESSAGE)
  getModelAnswer(@Body() data: GetAiModelAnswer) {
    return this.openAiService.getModelAnswer(data.question);
  }
}
