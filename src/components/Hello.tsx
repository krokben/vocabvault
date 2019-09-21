import * as React from "react";
import { Message } from "../store/vocab/types";

interface HelloProps {
  sendMessage: (message: Message) => void;
  messages: Message[];
}

export const Hello = (props: HelloProps) => (
  <div>
    {props.messages.map(message => (
      <p>
        Hello {message.message} from {message.user}
      </p>
    ))}
    <button
      onClick={() => props.sendMessage({ user: "Tommy", message: "World" })}
    >
      Click me
    </button>
  </div>
);
