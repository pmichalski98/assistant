"use client";
import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import Markdown from "react-markdown";

function Page(props) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const endOfMessagesRef = useRef<HTMLDivElement>();

  // Effect to scroll to the bottom of messages when new ones are added
  useEffect(() => {
    //@ts-ignore
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="m-4 w-full max-w-xl rounded-lg bg-white shadow-lg">
        <header className="bg-blue-500 p-4 text-lg font-semibold text-white">
          ChatGPT-like Interface
        </header>
        <main className="flex h-96 flex-col overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 ${message.role === "user" ? "text-right" : ""}`}
            >
              <span className="inline-block rounded-lg  bg-blue-100 px-4 py-2 text-blue-800 shadow">
                {message.content}
              </span>
            </div>
          ))}

          <div ref={endOfMessagesRef} />
        </main>
        <footer className="p-4">
          <form onSubmit={handleSubmit}>
            <textarea
              id="chatbox"
              placeholder="Type your message here..."
              className="max-h-[500px] w-full resize-none rounded-lg border p-2"
              value={input}
              onChange={handleInputChange}
              style={{
                minHeight: "50px",
                overflowY: "auto",
              }}
            ></textarea>
            <button
              className="mt-2 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="submit"
            >
              Send
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default Page;
