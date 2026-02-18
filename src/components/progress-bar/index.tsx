import { motion, useScroll } from "motion/react";

interface ProgressBarProps {
  origin?: string;
}

const ProgressBar = ({ origin = "left" }: ProgressBarProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`h-1 bg-foreground fixed top-0 right-0 left-0 origin-${origin}`}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ProgressBar;
