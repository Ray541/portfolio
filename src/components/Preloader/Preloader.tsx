import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type PreloaderProps = { onComplete: () => void };

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef(null);
  const percentageTextRef = useRef<HTMLSpanElement | null>(null);
  const [percentage, setPercentage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isForeground, setIsForeground] = useState(false);

  const percentageObj = { value: 0 };

  const updateCounter = () => {
    setPercentage(Math.round(percentageObj.value));
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".tile", {
        height: 0,
        stagger: {
          amount: -0.5,
        },
      });

      tl.to(".tile", {
        y: "100%",
        stagger: {
          amount: -1,
        },
        onStart: () => setIsForeground(!isForeground),
      });
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline
      .to({}, { duration: 0.7 }) // Initial delay
      .to(percentageObj, {
        value: 100,
        duration: 2,
        ease: "power1.inOut",
        onUpdate: updateCounter,
      })
      .then(() => {
        // Trigger fade out class Tailwind transition
        setFadeOut(true);
        // Wait for the CSS transition to finish, then unmount
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 300);
      });
  });

  if (isDone) return null;

  return (
    <div ref={containerRef} className="w-full min-h-screen flex relative overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="tile w-1/5 h-screen bg-foreground" />
      ))}

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center z-10 transition-all duration-300",
          fadeOut && "opacity-0"
        )}
      >
        <span
          ref={percentageTextRef}
          className={cn(
            "font-black text-8xl sm:text-9xl transition-colors duration-700",
            isForeground ? "text-foreground" : "text-background"
          )}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
