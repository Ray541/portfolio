import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import AnimatedAnchorOne from "@/components/animations/text-animations/AnimatedAnchorOne";

const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", current => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 100) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: hidden ? "-100%" : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="fixed top-10 z-5 w-full flex justify-center items-center pointer-events-none"
    >
      <nav className="pointer-events-auto flex gap-6 px-3 py-3 bg-background/60 border backdrop-blur-xs backdrop-saturate-150 rounded-full shadow-md md:px-5">
        {HEADER_ITEMS.map(item => (
          <AnimatedAnchorOne
            key={item}
            href={`#${item}`}
            aClassName="text-sm font-light capitalize"
            divClassName="text-sm font-light capitalize"
            onMouseEnter={() => handleCursorEnter(2)}
            onMouseLeave={() => handleCursorLeave()}
          >
            {item}
          </AnimatedAnchorOne>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
