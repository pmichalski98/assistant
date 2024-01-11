"use client";
import { useChat } from "ai/react";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="p-14 min-h-screen text-xl flex flex-col justify-between ">
      <ChatHeader />
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <ChatInput
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </form>
      </div>
    </main>
  );
}
