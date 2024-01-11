"use client";
import { useChat } from "ai/react";
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import { Moon, SendIcon } from "lucide-react";
import { useTheme } from "next-themes";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className=" flex min-h-screen flex-col justify-between px-4 pb-10">
      <div>
        <Navbar />
        <div className="">
          <ChatHeader />
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}
        </div>
      </div>
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
    </main>
  );
}
