"use client";
import Markdown from "react-markdown";
import UseChatContext from "@/app/hooks/useChatContext";
import { useEffect, useRef } from "react";

function Messages() {
  const { messages } = UseChatContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div
      ref={scrollRef}
      className=" h-auto max-h-[500px] overflow-y-auto bg-background "
    >
      {messages.map((m) => (
        <div
          key={m.id}
          className={`mb-4  whitespace-pre-wrap rounded-lg ${
            m.role === "assistant" ? "bg-accent" : "bg-secondary"
          } px-4 py-4`}
        >
          <p className="text-lg font-bold">
            {m.role === "user" ? "User: " : "AI: "}
          </p>
          <Markdown>{m.content}</Markdown>
        </div>
      ))}
    </div>
  );
}

export default Messages;
