import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdArrowUpward } from "react-icons/md";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { motion, AnimatePresence } from "motion/react";

type ScrollToTopProps = {
  className?: string;
};

const MotionButton = motion.create(Button);

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionButton
          key="scroll-top"
          variant="default"
          size="icon"
          className={className}
          onClick={scrollToTop}
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={handleCursorLeave}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileTap={{
            scale: 0.85,
          }}
        >
          <MdArrowUpward />
        </MotionButton>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
