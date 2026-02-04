import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  const headerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(
    () => {
      if (window.scrollY > 0) {
        gsap.fromTo(
          headerRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
        setIsVisible(true);
      } else {
        gsap.set(headerRef.current, { y: -100, opacity: 0 });
        setIsVisible(false);
      }
    },
    { scope: headerRef }
  );

  // Scroll direction-based header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Reached top — hide header
        if (isVisible) {
          setIsVisible(false);
          gsap.to(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down — hide
        if (isVisible) {
          setIsVisible(false);
          gsap.to(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up — show
        if (!isVisible) {
          setIsVisible(true);
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <header
      ref={headerRef}
      className="fixed top-10 z-5 w-full flex justify-center items-center pointer-events-none"
    >
      <nav className="pointer-events-auto flex gap-6 px-3 py-3 bg-background/60 border backdrop-blur-xs backdrop-saturate-150 rounded-full shadow-md md:px-6">
        {HEADER_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item}`}
            aria-label={`Go to ${item} section`}
            className="capitalize font-semibold text-sm sm:text-base text-foreground tracking-wide"
            onMouseEnter={() => handleCursorEnter(3)}
            onMouseLeave={handleCursorLeave}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
