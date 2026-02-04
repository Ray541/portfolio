import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ProgressBar = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-5">
      <div ref={progressRef} className="h-full bg-foreground origin-left" style={{ width: "0%" }} />
    </div>
  );
};

export default ProgressBar;
