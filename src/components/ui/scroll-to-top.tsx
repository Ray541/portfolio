"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpFromDot } from "lucide-react";

type ScrollToTopProps = {
  className?: string;
};

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [show, setShow] = useState(false);
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

  return (
    <Button
      ref={buttonRef}
      variant="default"
      size="icon"
      className={show ? className : "opacity-0"}
      onClick={scrollToTop}
    >
      <ArrowUpFromDot />
    </Button>
  );
};

export default ScrollToTop;
