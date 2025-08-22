import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { handleCursorEnter, handleCursorLeave } from "../../utils/gsapUtils";

type SocialButtonProps = {
  href: string;
  icon: ReactNode;
  label: string;
  withCursorAnimation?: boolean;
};

export default function SocialButton({
  href,
  icon,
  label,
  withCursorAnimation = true,
}: SocialButtonProps) {
  return (
    <Button
      asChild
      variant="link"
      size="icon"
      className="text-xl active:scale-95"
      onMouseEnter={
        withCursorAnimation ? () => handleCursorEnter(2.5) : undefined
      }
      onMouseLeave={withCursorAnimation ? handleCursorLeave : undefined}
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
        {icon}
      </a>
    </Button>
  );
}
