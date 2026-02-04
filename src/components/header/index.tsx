import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";
import AnimatedAnchorOne from "@/components/animations/text-animations/AnimatedAnchorOne";

const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Initial animation on mount
    if (window.scrollY > 0) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      });
      setIsVisible(true);
    } else {
      controls.set({
        y: "-100%",
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      });
      setIsVisible(false);
    }
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0 || (currentScrollY > lastScrollY && currentScrollY > 100)) {
        if (isVisible) {
          controls.start({
            y: "-100%",
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
            },
          });
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY) {
        if (!isVisible) {
          controls.start({
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          });
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible, controls]);

  return (
    <motion.header
      initial={{
        y: "-100%",
        opacity: 0,
      }}
      animate={controls}
      className="fixed top-10 z-5 w-full flex justify-center items-center pointer-events-none"
    >
      <nav className="pointer-events-auto flex gap-6 px-3 py-3 bg-background/60 border backdrop-blur-xs backdrop-saturate-150 rounded-full shadow-md md:px-6">
        {HEADER_ITEMS.map(item => (
          <AnimatedAnchorOne
            key={item}
            children={item}
            href={`#${item}`}
            onMouseEnter={() => handleCursorEnter(3)}
            onMouseLeave={handleCursorLeave}
            aClassName="text-sm capitalize"
            divClassName="text-sm capitalize"
          />
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
