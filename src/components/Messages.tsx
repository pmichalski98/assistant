"use client";
import Markdown from "react-markdown";
import UseChatContext from "@/app/hooks/useChatContext";

function Messages() {
  const { messages } = UseChatContext();

  return (
    <div className=" h-full overflow-y-auto ">
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
