import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdArrowUpward } from "react-icons/md";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

type ScrollToTopProps = {
  className?: string;
};

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    isVisible && (
      <Button
        variant="default"
        size="icon"
        className={className}
        onClick={scrollToTop}
        onMouseEnter={() => handleCursorEnter(2)}
        onMouseLeave={handleCursorLeave}
      >
        <MdArrowUpward />
      </Button>
    )
  );
};

export default ScrollToTop;
