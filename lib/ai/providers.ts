import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
// import { xai } from '@ai-sdk/xai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  // custom settings, e.g.
  baseURL: 'https://openrouter.ai/api/v1', // strict mode, enable when using the OpenAI API
});

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'gpt-4.1': openai('gpt-4.1'),
        
        'gpt-4.1-mini': openai('gpt-4.1-mini'),
        'gpt-4.1-nano': openai('gpt-4.1-nano'),


        // 'chat-model-reasoning': wrapLanguageModel({
        //   model: openai('gpt-4.1'),
        //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
        // }),
        'title-model': openai('gpt-4.1'),
        'artifact-model': openai('gpt-4.1'),
      },
      imageModels: {
        
      },
    });
