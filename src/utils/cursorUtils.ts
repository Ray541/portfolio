import { MotionValue } from "motion/react";

let scaleMotionValue: MotionValue<number> | null = null;
let currentScale = 1;

// Called once from CustomCursor
export const registerCursorScale = (motionValue: MotionValue<number>) =>  {
  scaleMotionValue = motionValue;
};

export const scaleCursor = (scale: number) => {
  if (!scaleMotionValue) return;

  currentScale = scale;
  scaleMotionValue.set(scale);
};

export const handleCursorEnter = (scale: number) => {
  scaleCursor(scale);
};

export const handleCursorLeave = () => {
  scaleCursor(1);
};

export const getCurrentScale = () => currentScale;
