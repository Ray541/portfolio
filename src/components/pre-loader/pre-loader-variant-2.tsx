import { useEffect, useState } from "react";
import { motion, animate } from "motion/react";

type PreloaderProps = { onComplete: () => void };

const PreloaderVariant2 = ({ onComplete }: PreloaderProps) => {
  const [percentage, setPercentage] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.2,
      delay: 1, // Wait for the fade-in animation
      ease: [0.33, 1, 0.68, 1], // easeOutCubic
      onUpdate(value) {
        setPercentage(Math.round(value));
      },
      onComplete() {
        // Delay to render portfolio content after pre-loader
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 100);
      },
    });

    return () => controls.stop();
  }, [onComplete]);

  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: percentage === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-foreground text-background overflow-hidden cursor-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="w-48 md:w-64 h-0.5 bg-background/20 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-background"
            initial={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        <div className="flex items-center justify-between gap-5 w-full">
          <span className="text-xs sm:text-sm tracking-widest text-background">Loading._.</span>
          <span className="tabular-nums font-bold text-background">{percentage}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PreloaderVariant2;
