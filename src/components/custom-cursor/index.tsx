import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { registerCursorScale, getCurrentScale } from "@/utils/cursorUtils";

function CustomCursor({
  className = "hidden lg:block fixed top-0 left-0 w-3 h-3 z-50 bg-background dark:bg-foreground rounded-full pointer-events-none mix-blend-difference",
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);

  // Register global scale controller
  useEffect(() => {
    registerCursorScale(scale);
  }, [scale]);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });
  const springScale = useSpring(scale, { stiffness: 400, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
    };

    const handleMouseDown = () => {
      const current = getCurrentScale();
      scale.set(current > 1 ? current * 0.9 : 0.85);
    };

    const handleMouseUp = () => {
      scale.set(getCurrentScale());
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, scale]);

  return (
    <motion.div
      id="cursor"
      className={className}
      style={{
        x: springX,
        y: springY,
        scale: springScale,
      }}
    />
  );
}

export default CustomCursor;
