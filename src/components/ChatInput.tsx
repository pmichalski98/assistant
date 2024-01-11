import React, { FormEvent, useRef } from "react";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { ChatRequestOptions } from "ai";

interface ChatInputProps extends TextareaProps {
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  value: string;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined,
  ) => void;
}
function ChatInput({ handleSubmit, value, handleInputChange }: ChatInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Textarea
      ref={textAreaRef}
      className="overflow-y-hidden pr-12"
      value={value}
      onKeyDown={async (e) => {
        if (e.key === "Enter") {
          //@ts-ignore
          handleSubmit(e);
        }
      }}
      onChange={(e) => {
        if (textAreaRef.current) {
          if (e.target.value === "") {
            textAreaRef.current.style.height = "40px";
          }
          const scrollHeight = textAreaRef.current?.scrollHeight;
          if (scrollHeight > 40) {
            textAreaRef.current.style.height = `${scrollHeight}px`;
          }
          handleInputChange(e);
        }
      }}
      required
      placeholder="Ask me anything..."
    />
  );
}

export default ChatInput;
