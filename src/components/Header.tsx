import React, { useState } from "react";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import ChatHeader from "@/components/ChatHeader";
import Options from "@/components/Options";
import { Button } from "@/components/ui/button";
import NewChatButton from "@/components/NewChatButton";

function Header() {
  return (
    <header className=" relative w-full bg-background px-4 py-2">
      <div className="flex items-center justify-end gap-2">
        <NewChatButton />
        <ToggleThemeButton />
      </div>
      <div className="space-y-6">
        <Options />
        <ChatHeader />
      </div>
    </header>
  );
}

export default Header;
