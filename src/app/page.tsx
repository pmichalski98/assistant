"use client";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="flex min-h-screen flex-col bg-red-400 items-center justify-between p-24">
      <Button>Halo</Button>
    </main>
  );
}
