import { Injectable, Logger } from '@nestjs/common';
import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';

const DEFAULT_MODEL_ID = 'text-davinci-003';
const DEFAULT_TEMPERATURE = 0.9;
const logger = new Logger();

@Injectable()
export class OpenAiService {
  private readonly openAiApi: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      organization: process.env.ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openAiApi = new OpenAIApi(configuration);
  }

  async getModelAnswer(question: string, temperature?: number) {
    try {
      const params: CreateCompletionRequest = {
        prompt: question,
        model: DEFAULT_MODEL_ID,
        temperature:
          temperature != undefined ? temperature : DEFAULT_TEMPERATURE,
      };

      const response = await this.openAiApi.createCompletion(params);
      const answer = response.data.choices[0].text;

      return answer;
    } catch (error) {}
  }
}
