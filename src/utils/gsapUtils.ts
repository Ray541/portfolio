import gsap from "gsap";

let currentScale = 1;

const scaleCursor = (scale: number, animate = true) => {
  currentScale = scale;
  gsap.to("#cursor", {
    scale,
    duration: animate ? 0.3 : 0,
    ease: "power2.out",
  });
};

/**
 * Function to set enter cursor scale
 * @param scale gasp Scale size to be applied
 * @returns Transformed cursor with updated scale
 */
const handleCursorEnter = (scale: number) => scaleCursor(scale);

/**
 * Function to set exit cursor scale
 * @returns Transformed cursor to normal scale
 */
const handleCursorLeave = () => scaleCursor(1);

/**
 * Function to get the current scale of the cursor
 * @returns Current scale of the cursor
 */
const getCurrentScale = () => currentScale;

export { scaleCursor, handleCursorEnter, handleCursorLeave, getCurrentScale };
