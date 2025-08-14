import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type PreloaderProps = { onComplete: () => void };

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const percentageObj = { value: 0 };

  const updateCounter = () => {
    setPercentage(Math.round(percentageObj.value));
  };

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .to({}, { duration: 0.7 }) // Initial delay
        .to(percentageObj, {
          value: 100,
          duration: 2,
          ease: "power1.out",
          onUpdate: updateCounter,
        })
        .then(() => {
          // Trigger fade out class Tailwind transition
          setFadeOut(true);
          // Wait for the CSS transition to finish, then unmount
          setTimeout(() => {
            setIsDone(true);
            onComplete();
          }, 700);
        });
    },
    { scope: containerRef }
  );

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "preloader relative w-full max-h-screen h-screen z-10 flex items-center justify-center text-foreground transition-opacity duration-300",
        fadeOut && "opacity-0"
      )}
    >
      <span className="font-black text-9xl">{percentage}%</span>
    </div>
  );
};

export default Preloader;
