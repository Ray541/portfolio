import { HTMLMotionProps, motion } from "motion/react";

interface AnimatedAnchordTwoProps extends HTMLMotionProps<"a"> {
  aClassName?: string;
  href: string;
  target?: string;
  children: string;
  style?: object;
  duration?: number;
  stagger?: number;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const AnimatedAnchordTwo = ({
  aClassName,
  href,
  target = "_self",
  children,
  style,
  duration = DURATION,
  stagger = STAGGER,
}: AnimatedAnchordTwoProps) => {
  return (
    <motion.a
      className={`relative block whitespace-nowrap overflow-hidden ${aClassName}`}
      style={style}
      href={href}
      target={target}
      initial="initial"
      whileHover="hovered"
      whileTap="tapped"
      whileFocus="focused"
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
                tapped: { y: "-100%" },
                focused: { y: "-100%" },
              }}
              transition={{
                duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
                tapped: { y: 0 },
                focused: { y: 0 },
              }}
              transition={{
                duration,
                ease: "easeInOut",
                delay: stagger * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default AnimatedAnchordTwo;
