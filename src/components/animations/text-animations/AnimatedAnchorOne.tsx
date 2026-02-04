import { HTMLMotionProps, motion } from "motion/react";

interface AnimatedAnchorOneProps extends HTMLMotionProps<"a"> {
  aClassName?: string;
  divClassName?: string;
  href: string;
  target?: string;
  children: React.ReactNode;
}

const AnimatedAnchorOne = ({
  aClassName,
  divClassName,
  href,
  target = "_self",
  children,
  ...rest
}: AnimatedAnchorOneProps) => {
  return (
    <motion.a
      className={`relative inline-block whitespace-nowrap overflow-hidden ${aClassName}`}
      href={href}
      target={target}
      initial="initial"
      whileHover="hovered"
      whileTap="tapped"
      whileFocus="focused"
      {...rest}
    >
      <motion.div
        className={divClassName}
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
          tapped: { y: "-100%" },
          focused: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={`absolute inset-0 ${divClassName}`}
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
          tapped: { y: 0 },
          focused: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default AnimatedAnchorOne;
