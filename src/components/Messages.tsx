"use client";
import Markdown from "react-markdown";
import UseChatContext from "@/app/hooks/useChatContext";
import { useEffect, useRef, useState } from "react";

function Messages() {
  const { messages } = UseChatContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTrigger, setScrollTrigger] = useState(true);

  function autoScroll(trigger: boolean) {
    if (trigger) {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }

  useEffect(() => {
    autoScroll(scrollTrigger);
  }, [messages]);
  return (
    <div
      ref={scrollRef}
      onClick={(e) => {
        console.log(e);
        setScrollTrigger(false);
      }}
      onMouseLeave={() => setScrollTrigger(true)}
      className=" h-auto max-h-[1000px] overflow-y-auto bg-background "
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
