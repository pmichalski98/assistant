"use client";
import { useChat } from "ai/react";
import ChatInput from "@/components/ChatInput";
import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <Navbar />
      <main className=" px-4 pt-20 ">
        <section className="mb-20 h-[1200px] bg-background ">
          <div className=" h-full overflow-y-auto pr-10">
            {messages.map((m) => (
              <div
                key={m.id}
                className="mb-4 whitespace-pre-wrap  rounded-lg bg-secondary px-4 py-4"
              >
                <p className="text-lg font-bold">
                  {m.role === "user" ? "User: " : "AI: "}
                </p>
                <Markdown>{m.content}</Markdown>
              </div>
            ))}
          </div>
        </section>
        <div className="fixed bottom-0 right-0 z-10 mx-auto  w-full bg-background p-4 ">
          <div>
            <form onSubmit={handleSubmit} className="relative ">
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
          </div>
        </div>
      </main>
    </>
  );
}
