import { useTheme } from "../hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop2 } from "lucide-react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = (theme: string) => {
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
      onMouseEnter={() => handleCursorEnter(2)}
      onMouseLeave={handleCursorLeave}
    >
      {getIcon(theme)}
    </Button>
  );
}
