import { HTMLMotionProps, motion } from "motion/react";

interface AlternateTextProps extends HTMLMotionProps<"span"> {
  initialText: string;
  altText?: string;
  wrapperClassName?: string;
  initialTextClassName?: string;
  altTextClassName?: string;
}

const AlternateText = ({
  initialText,
  altText = "Enter Text",
  wrapperClassName = "",
  initialTextClassName = "",
  altTextClassName = "",
  ...rest
}: AlternateTextProps) => {
  return (
    <motion.span
      layout
      className={`relative inline-block overflow-hidden align-text-bottom leading-none whitespace-nowrap ${wrapperClassName}`}
      initial="initial"
      whileHover="hovered"
      whileTap="tapped"
      {...rest}
    >
      <motion.span
        layout
        className={`block whitespace-nowrap ${initialTextClassName}`}
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
          tapped: { y: "-100%" },
        }}
      >
        {initialText}
      </motion.span>

      <motion.span
        layout
        className={`absolute w-full h-full inset-0 block whitespace-nowrap ${altTextClassName}`}
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
          tapped: { y: 0 },
        }}
      >
        {altText}
      </motion.span>
    </motion.span>
  );
};

export default AlternateText;
