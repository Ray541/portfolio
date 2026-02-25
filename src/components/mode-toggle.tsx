import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop2 } from "lucide-react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { motion } from "motion/react";

type ModeToggleProps = {
  className?: string;
};

const MotionButton = motion.create(Button);

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
    <MotionButton
      variant="default"
      size="icon"
      className={className}
      onClick={toggleTheme}
      onMouseEnter={() => handleCursorEnter(2)}
      onMouseLeave={handleCursorLeave}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      transition={{ duration: 0.3 }}
      whileTap={{
        scale: 0.85,
      }}
    >
      {getIcon(theme)}
    </MotionButton>
  );
}
