import { useEffect, useState } from "react";
import { motion, useAnimation, animate } from "motion/react";
import { cn } from "@/lib/utils";

type PreloaderProps = { onComplete: () => void };

const Preloader = ({ onComplete }: PreloaderProps) => {
  const controls = useAnimation();
  const [percentage, setPercentage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  // Counter
  useEffect(() => {
    const counter = animate(0, 100, {
      duration: 2,
      delay: 0.7,
      onUpdate(value) {
        setPercentage(Math.round(value));
      },
      onComplete() {
        setFadeOut(true);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 300);
      },
    });

    return () => counter.stop();
  }, [onComplete]);

  // Sequential timeline
  useEffect(() => {
    const runAnimation = async () => {
      // PHASE 1 — Grow tiles
      await controls.start(i => ({
        height: "100vh",
        transition: {
          duration: 0.6,
          delay: (9 - i) * 0.05, // negative stagger
        },
      }));

      // PHASE 2 — Slide tiles down
      setChangeColor(true);

      await controls.start(i => ({
        y: "100%",
        transition: {
          duration: 0.8,
          delay: (9 - i) * 0.08, // stronger stagger like GSAP amount -1
        },
      }));
    };

    runAnimation();
  }, [controls]);

  if (isDone) return null;

  return (
    <div className="w-full min-h-screen flex relative overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ height: 0, y: 0 }}
          animate={controls}
          className="w-1/5 bg-foreground"
        />
      ))}

      {/* Percentage */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center z-10 transition-all duration-300",
          fadeOut && "opacity-0"
        )}
      >
        <span
          className={cn(
            "font-black text-8xl sm:text-9xl transition-colors duration-700",
            changeColor ? "tChanget-ford" : "text-background"
          )}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
