import React, { FormEvent, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ChatRequestOptions } from "ai";

interface ChatInputProps {
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  value: string;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
}
function ChatInput({ handleSubmit, value, handleInputChange }: ChatInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Textarea
      ref={textAreaRef}
      className="pr-12 overflow-y-hidden"
      value={value}
      onKeyDown={async (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      }}
      onChange={(e) => {
        if (e.target.value === "") {
          textAreaRef.current.style.height = "40px";
        }
        const scrollHeight = textAreaRef.current?.scrollHeight;
        textAreaRef.current.style.height =
          scrollHeight > 40 && `${scrollHeight}px`;
        handleInputChange(e);
      }}
      required
      placeholder="Ask me anything..."
    />
  );
}

export default ChatInput;
