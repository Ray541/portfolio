"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Laptop2, Loader2Icon, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = (theme: string | undefined) => {
    if (!isMounted) return <Loader2Icon className="animate-spin" />; // loading till get mounts
    switch (theme) {
      case "light":
        return <Moon />;
      case "dark":
        return <Laptop2 />;
      case "system":
        return <Sun />;
      default:
        return <Sun />;
    }
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={className}
      onClick={toggleTheme}
    >
      {getIcon(theme)}
    </Button>
  );
}
