"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className="rounded-full p-1 shadow ring ring-secondary"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <Moon size="20" /> : <Sun size="20" />}
    </button>
  );
}

export default ToggleThemeButton;
