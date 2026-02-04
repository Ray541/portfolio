import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { getCurrentScale } from "../../utils/gsapUtils"; // Adjust path as needed

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Mouse movement
    const move = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 6,
        y: e.clientY - 6,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    // On mouse Click
    const handleMouseDown = () => {
      const currentScale = getCurrentScale();
      gsap.to(cursorRef.current, {
        scale: currentScale > 1 ? currentScale * 0.9 : 0.75, // Click scale is different when the cursor is hovered and not hovered
        duration: 0.15,
        ease: "power2.out",
      });
    };

    // On mouse Release
    const handleMouseUp = () => {
      const hoverScale = getCurrentScale();
      gsap.to(cursorRef.current, {
        scale: hoverScale,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="hidden lg:block lg:fixed top-0 left-0 w-3 h-3 z-10 bg-background dark:bg-foreground rounded-full pointer-events-none mix-blend-difference"
    />
  );
};

export default CustomCursor;
