import { Easing, motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  ease?: Easing | Easing[];
  once?: boolean;
  amount?: number;
}

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  duration = 0.5,
  ease = "easeIn",
  once = true,
  amount = 0.5,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}
