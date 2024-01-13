import React from "react";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import ChatHeader from "@/components/ChatHeader";

function Navbar() {
  return (
    <header className="fixed w-full bg-background px-4 py-2">
      <div className="flex items-center justify-end">
        <ToggleThemeButton />
      </div>
      <ChatHeader />
    </header>
  );
}

export default Navbar;
