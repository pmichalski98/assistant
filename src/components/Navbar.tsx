import React from "react";
import ToggleThemeButton from "@/components/ToggleThemeButton";

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-end px-4 py-2">
      <ToggleThemeButton />
    </nav>
  );
}

export default Navbar;
