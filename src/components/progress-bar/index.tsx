import { motion, useScroll } from "motion/react";

interface ProgressBarProps {
  className?: string;
  barClassName?: string;
  origin?: "top" | "bottom";
}

const ProgressBar = ({
  className = "h-24 w-px bg-foreground/20",
  barClassName = "w-full bg-foreground",
  origin = "top",
}: ProgressBarProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={className}>
      <motion.div
        className={`h-full ${barClassName}`}
        style={{
          scaleY: scrollYProgress,
          transformOrigin: origin,
        }}
      />
    </div>
  );
};

export default ProgressBar;
