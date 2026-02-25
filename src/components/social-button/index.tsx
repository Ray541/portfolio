import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const MotionButton = motion.create(Button);

interface SocialButtonProps extends ComponentPropsWithoutRef<typeof MotionButton> {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialButton = ({ href, icon, label, ...rest }: SocialButtonProps) => (
  <MotionButton
    asChild
    variant="link"
    size="icon"
    className="transition-colors"
    initial={{ y: "100%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{
      scale: 1.25,
    }}
    whileTap={{
      scale: 0.95,
    }}
    transition={{
      duration: 0.5,
      ease: "easeIn",
      type: "spring",
      stiffness: 200,
      damping: 15,
    }}
    {...rest}
  >
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {icon}
    </a>
  </MotionButton>
);

export default SocialButton;
