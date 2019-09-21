export interface Message {
  user: string;
  message: string;
}

export interface VocabState {
  messages: Message[];
}

export const SEND_MESSAGE = "SEND_MESSAGE";

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

export type VocabActionTypes = SendMessageAction;
