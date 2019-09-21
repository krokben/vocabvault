import { Message, SEND_MESSAGE, VocabActionTypes } from "./types";

export function sendMessage(newMessage: Message): VocabActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  };
}
