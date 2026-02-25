import { motion, useScroll } from "motion/react";

interface ProgressBarProps {
  className?: string;
  origin?: string;
  withBg?: boolean;
  bgClassName?: string;
  barClassName?: string;
}

const ProgressBar = ({
  className = "h-0.5 bg-foreground fixed inset-0 z-50",
  origin = "left",
  withBg = false,
  bgClassName = "h-0.5 bg-primary/20 fixed inset-0 z-50",
  barClassName = "h-0.5 bg-foreground",
}: ProgressBarProps) => {
  const { scrollYProgress } = useScroll();

  return !withBg ? (
    <motion.div
      className={className}
      style={{
        scaleX: scrollYProgress,
        transformOrigin: origin,
      }}
    />
  ) : (
    <div className={bgClassName}>
      <motion.div
        className={barClassName}
        style={{
          scaleX: scrollYProgress,
          transformOrigin: origin,
        }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
