import { useEffect, useState } from "react";
import AnimatedAnchorOne from "../animations/text-animations/AnimatedAnchorOne";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";

const AUTHOR_NAME = "Pranav";
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  type DigitalClockProps = { time: Date };
  const DigitalClock = ({ time }: DigitalClockProps) => {
    const timeString = time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const dateString = time.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      weekday: "long",
    }); // e.g., 20-May, Monday

    return (
      <div className="flex flex-row gap-5 md:gap-3 flex-wrap items-center justify-center text-center text-primary px-4 py-2">
        <div className="bg-foreground text-background font-black py-1 px-3 rounded-lg tracking-widest">
          {timeString}
        </div>
        <div className="text-sm text-muted-foreground font-bold">{dateString}</div>
      </div>
    );
  };

  return (
    <footer className="relative bg-background py-7 px-3 text-center text-muted-foreground">
      <div className="absolute w-full inset-0 h-[0.5px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center max-w-5xl mx-auto">
        <AnimatedAnchorOne
          children={AUTHOR_NAME}
          href="#"
          aClassName="text-lg font-black capitalize"
          divClassName="text-lg font-black capitalize"
          onMouseEnter={() => handleCursorEnter(6)}
          onMouseLeave={handleCursorLeave}
        />

        <DigitalClock time={time} />

        <p className="text-md font-black">
          &copy; <span className="text-primary">{CURRENT_YEAR}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
