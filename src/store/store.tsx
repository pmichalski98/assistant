"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useChat, UseChatHelpers } from "ai/react";

export type GptModels = "gpt-4-1106-preview" | "gpt-3.5-turbo";
interface OptionsI {
  model: GptModels;
  test: true;
}

interface ChatContextI extends UseChatHelpers {
  options: OptionsI;
  setOptions: Dispatch<SetStateAction<OptionsI>>;
}
export const ChatContext = createContext<ChatContextI>({} as ChatContextI);

export function ChatContextProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<OptionsI>({
    model: "gpt-3.5-turbo",
    test: true,
  });
  const chat = useChat({
    body: options,
  });
  const value: ChatContextI = {
    ...chat,
    options,
    setOptions,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
