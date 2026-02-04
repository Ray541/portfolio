import { motion } from "motion/react";

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        // backgroundImage: 'url("/src/assets/images/black-noise.png")',
        backgroundImage: 'url("/src/assets/images/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

export default FuzzyOverlay;
