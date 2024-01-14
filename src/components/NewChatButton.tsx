"use client";
import { Button } from "@/components/ui/button";
import useChatContext from "@/app/hooks/useChatContext";

function NewChatButton() {
  const { setMessages } = useChatContext();
  return (
    <Button onClick={() => setMessages([])} variant="secondary">
      New Chat
    </Button>
  );
}

export default NewChatButton;
