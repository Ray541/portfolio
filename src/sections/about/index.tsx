import { ReactNode, useRef } from "react";
import Section from "@/components/section";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { GraduationCap } from "lucide-react";
import SocialButton from "@/components/social-button";
import { GrLocationPin } from "react-icons/gr";
import { motion, useScroll, useTransform } from "motion/react";
import { EDUCATION, SKILLS } from "@/data/about";
import { SOCIAL_LINKS } from "@/data/common";
import type { Education } from "@/types";

// Reusable Components
type SkillBadgeProps = {
  name: string;
  icon: ReactNode;
};
const SkillBadge = ({ name, icon }: SkillBadgeProps) => (
  <span className="flex items-center justify-center gap-2.5 border-2 border-border bg-accent/20 dark:bg-accent/30 hover:bg-accent/40 dark:hover:bg-accent/50 px-4 py-2.5 rounded-lg hover:-translate-y-1 transition-all duration-300">
    <span className="text-xl md:text-2xl drop-shadow-sm">{icon}</span>
    <span className="text-sm md:text-base font-bold tracking-tight text-foreground/90">{name}</span>
  </span>
);

type EducationItemProps = {
  e: Education;
};

const EducationItem = ({ e }: EducationItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const y = useTransform(scrollYProgress, value => {
    if (!ref.current) return 0;
    return value * (ref.current.offsetHeight - 20);
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-start gap-1 md:gap-5 pl-5 border-l-2 border-foreground/30"
    >
      <motion.div
        style={{ y }}
        className="absolute -left-[7px] top-0 w-3 h-3 rounded-sm bg-foreground border-2 border-foreground"
      />

      <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground pt-1">
        {e.passingout}
      </span>

      <div className="flex flex-col gap-1">
        <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight border-b-2">
          {e.degree} <span className="text-foreground/50 text-lg">({e.title})</span>
        </h4>

        <div className="flex flex-col gap-0.5">
          <p className="text-lg font-semibold text-foreground/90 italic">{e.trade}</p>
          <p className="text-base font-medium text-muted-foreground">{e.college}</p>
          <p className="text-sm text-muted-foreground/80">{e.board}</p>
        </div>

        <div className="mt-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-black uppercase tracking-wider">
            Result: {e.marks}
            <GraduationCap className="text-blue-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Section sectionName="about" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        <span className="text-muted">About</span> Me
      </h2>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center flex-wrap gap-3 p-1">
          {SKILLS.map((skill, idx) => (
            <SkillBadge key={idx} icon={<skill.Icon color={skill.color} />} name={skill.name} />
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-black text-foreground uppercase">Education</h3>
          {EDUCATION.map((e, idx) => (
            <EducationItem key={idx} e={e} />
          ))}
        </div>

        <div className="hidden lg:flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5 border-2 p-3 md:p-5 rounded-lg bg-background">
          <div className="flex items-center justify-center flex-wrap gap-1">
            <GrLocationPin />
            <h3 className="text-xl text-foreground font-semibold">India (IN)</h3>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            <h3 className="text-xl text-foreground font-semibold">Get in Touch</h3>
            {SOCIAL_LINKS.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={<social.Icon />}
                label={social.label}
                onMouseEnter={() => handleCursorEnter(3)}
                onMouseLeave={() => handleCursorLeave()}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
