import { useRef } from "react";
import Section from "@/components/section";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/data/work";
import type { Experience as ExperienceData } from "@/types";

type ExperienceItemProps = {
  exp: ExperienceData;
};

const ExperienceItem = ({ exp }: ExperienceItemProps) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start gap-1 md:gap-5 pl-10 pb-5">
      {/* The Static Dot */}
      <div className="absolute left-0.5 top-2 w-3.5 h-3.5 rounded-sm bg-background border-2 border-foreground z-10" />

      {/* Date/Duration Section */}
      <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground min-w-[120px] pt-1">
        {exp.duration}
      </span>

      <div className="flex flex-col gap-2 w-full">
        {/* Company Header */}
        <div className="flex flex-col gap-1">
          <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight border-b-2 inline-block w-fit">
            {exp.company}
          </h4>
        </div>

        {/* Roles */}
        <div className="flex flex-col gap-4">
          {exp.roles.map((role, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                <h5 className="text-lg font-semibold text-foreground/90">{role.title}</h5>
                {role.duration && (
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
                    {role.duration}
                  </span>
                )}
              </div>
              <ul className="list-disc list-outside flex flex-col gap-1.5 text-sm md:text-base text-foreground/85 ml-5">
                {role.contributions.map((bullet, i) => (
                  <li key={i} className="pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center mt-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
            Tech Stack
          </h5>
          {/* Tech Stack Badges */}
          <div className="flex items-center justify-start flex-wrap gap-1.5 mt-2">
            {exp.tech.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center justify-center gap-1.5 border-2 border-border bg-accent/20 dark:bg-accent/30 hover:bg-accent/40 dark:hover:bg-accent/50 px-2 py-1.5 rounded-lg hover:-translate-y-0.5 transition-all duration-300 text-xs font-medium tracking-tight"
              >
                <span className="text-base">
                  <item.Icon color={item.color} />
                </span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="text-end">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/70 text-background text-xs font-black uppercase tracking-wider">
            {exp.experienceType}
            <Briefcase className="w-3.5 h-3.5 text-blue-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  // Reference to the timeline container
  // Used by useScroll to track scroll position relative to this element
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**useScroll (motion)
    Tracks scroll progress of a specific element (containerRef).

    offset: ["start center", "end center"]

    Meaning:
    - 0% progress when the top of the container reaches the center of viewport
    - 100% progress when the bottom of the container reaches the center
  */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  /**useTransform maps scroll progress (0 → 1) into height values ("0%" → "100%")

    This dynamically increases the vertical progress line height as the user scrolls through the timeline.
  */
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section sectionName="work" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        <span className="text-muted">Work</span> Experience
      </h2>

      <div className="max-w-2xl mx-auto w-full">
        <p className="font-semibold text-muted-foreground text-center mb-12 w-full mx-auto">
          With a passion for crafting exceptional digital experiences, I have honed my skills in web
          and frontend development through hands-on experience and continuous learning.
        </p>

        <div
          ref={containerRef} // Scroll tracking is attached here
          className="w-full mx-auto relative flex flex-col gap-5"
        >
          {/* 
            Base Timeline Line (static background line)
            This acts as the full height guide
          */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-foreground/30" />

          {/* 
            Animated Progress Line
            This line sits on top of the base line.
            Its height grows from 0% → 100% based on scroll position.
            origin-top ensures animation grows downward.
          */}
          <motion.div
            style={{ height }}
            className="absolute left-2 top-0 w-[2px] bg-foreground origin-top"
          />

          {EXPERIENCE.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
