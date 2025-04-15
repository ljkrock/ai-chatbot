export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-4.1',
    name: 'gpt-4.1',
    description: 'Experience the power of GPT-4.1',
  },
  {
    id: 'gpt-4.1-mini',
    name: 'gpt-4.1 Mini',
    description: 'Experience the power of GPT-4.1 Mini',
  },
  {
    id: 'gpt-4.1-nano',
    name: 'gpt-4.1 Nano',
    description: 'Experience the power of GPT-4.1 Nano',
  },
];
