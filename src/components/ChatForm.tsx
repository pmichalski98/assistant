"use client";
import React from "react";
import ChatInput from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import UseChatContext from "@/app/hooks/useChatContext";

function ChatForm() {
  const { input, handleInputChange, handleSubmit } = UseChatContext();

  return (
    <form
      onSubmit={handleSubmit}
      className="relative max-h-52 overflow-y-scroll "
    >
      <ChatInput
        value={input}
        placeholder="Say something..."
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <Button size="icon" className="absolute bottom-0 right-0">
        <SendIcon />
      </Button>
    </form>
  );
}

export default ChatForm;
