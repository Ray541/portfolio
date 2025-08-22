"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpFromDot } from "lucide-react";

type ScrollToTopProps = {
  className?: string;
};

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [show, setShow] = useState(true);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  if (show) {
    return (
      <Button
        ref={buttonRef}
        variant="default"
        size="icon"
        className={className}
        onClick={scrollToTop}
      >
        <ArrowUpFromDot />
      </Button>
    );
  }

  return null;
};

export default ScrollToTop;
