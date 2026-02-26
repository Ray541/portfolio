import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop2 } from "lucide-react";
import {
  PiLightbulbFilamentLight,
  PiLightbulbFilamentFill,
  PiLightbulbFilamentDuotone,
} from "react-icons/pi";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const modeToggleVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      text: "text-sm font-medium",
      icon: "p-2",
      pill: "px-4 py-2 rounded-full",
      floating:
        "fixed bottom-6 right-6 rounded-full shadow-lg bg-background border hover:scale-105",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

const contentMap = {
  light: {
    text: "_dark.",
    icon: <Moon />,
    pill: <PiLightbulbFilamentFill />,
    floating: <Moon />,
  },
  dark: {
    text: "_sys.",
    icon: <Laptop2 />,
    pill: <PiLightbulbFilamentDuotone />,
    floating: <Laptop2 />,
  },
  system: {
    text: "_light.",
    icon: <Sun />,
    pill: <PiLightbulbFilamentLight />,
    floating: <Sun />,
  },
} as const;

const MotionButton = motion.create(Button);

type ModeToggleProps = VariantProps<typeof modeToggleVariants> & {
  className?: string;
};

export function ModeToggle({ variant = "text", className }: ModeToggleProps) {
  const { theme = "light", setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const isIconLike = variant === "icon" || variant === "floating";

  return (
    <MotionButton
      variant="link"
      size={isIconLike ? "icon" : "default"}
      className={cn(modeToggleVariants({ variant }), className)}
      onClick={toggleTheme}
      onMouseEnter={() => handleCursorEnter(isIconLike ? 2 : 3)}
      onMouseLeave={handleCursorLeave}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.85 }}
    >
      {contentMap[theme]?.[variant ?? "text"]}
    </MotionButton>
  );
}
