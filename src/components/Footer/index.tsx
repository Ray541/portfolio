import { useEffect, useState } from "react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

const AUTHOR_NAME = "Pranav";
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
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

    const dateString = time.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      weekday: "long",
    }); // e.g., 20-May-2025, Monday

    return (
      <div className="flex flex-row gap-5 md:gap-3 flex-wrap items-center text-center text-primary px-4 py-2">
        <div className="bg-foreground text-background font-black py-1 px-3 rounded-lg tracking-widest">
          {timeString}
        </div>
        <div
          className="text-sm text-muted-foreground font-bold"
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={handleCursorLeave}
        >
          {dateString}
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-background py-7 px-3 text-center text-muted-foreground border-t border-border border-dashed">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center max-w-5xl mx-auto">
        <p className="text-sm font-medium flex items-center gap-1 tracking-wide">
          Developed by{" "}
          <span
            className="text-lg text-primary font-black"
            onMouseEnter={() => handleCursorEnter(2)}
            onMouseLeave={handleCursorLeave}
          >
            {AUTHOR_NAME}
          </span>
        </p>

        <DigitalClock time={time} />

        <p
          className="text-md font-black"
          onMouseEnter={() => handleCursorEnter(2.5)}
          onMouseLeave={handleCursorLeave}
        >
          &copy; <span className="text-primary">{CURRENT_YEAR}</span>
        </p>
      </div>
    </footer>
  );
}
