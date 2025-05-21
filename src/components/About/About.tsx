import React, { ReactElement, ReactNode, useState } from "react";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiGit,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import { IconBaseProps } from "react-icons";
import { GoCopy } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";
import Socials from "../../components/Socials/Socials";
import { Button } from "@/components/ui/button";
import Section from "../Section/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { handleCursorEnter, handleCursorLeave } from "../../utils/gsapUtils";

const withColor = (
  icon: ReactElement<IconBaseProps>,
  color: string
): ReactElement<IconBaseProps> => {
  return React.cloneElement(icon, { color });
};

// Data
const SKILLS = [
  { name: "React", icon: withColor(<SiReact />, "#61DAFB") },
  { name: "JavaScript", icon: withColor(<SiJavascript />, "#F7DF1E") },
  { name: "Tailwind CSS", icon: withColor(<SiTailwindcss />, "#06B6D4") },
  { name: "Bootstrap", icon: withColor(<SiBootstrap />, "#7952B3") },
  { name: "CSS 3", icon: withColor(<SiCss3 />, "#264DE4") },
  { name: "HTML 5", icon: withColor(<SiHtml5 />, "#E44D26") },
  { name: "Git", icon: withColor(<SiGit />, "#F05032") },
  {
    name: "C / C++",
    icon: withColor(<SiC />, "#A8B9CC"),
    alternateIcon: withColor(<SiCplusplus />, "#00599C"),
  },
  { name: "SQL", icon: withColor(<SiMysql />, "#00758F") },
];

const WORKINGON = [
  {
    domain: "Frontend",
    technologies: [
      { name: "TypeScript", icon: withColor(<SiTypescript />, "#3178C6") },
      { name: "Next.js", icon: withColor(<SiNextdotjs />, "#000000") },
      { name: "Redux", icon: withColor(<SiRedux />, "#764ABC") },
    ],
  },
  {
    domain: "Backend",
    technologies: [
      { name: "Node.js", icon: withColor(<SiNodedotjs />, "#339933") },
      { name: "Express.js", icon: withColor(<SiExpress />, "#000000") },
    ],
  },
  {
    domain: "Database",
    technologies: [
      { name: "MongoDB", icon: withColor(<SiMongodb />, "#47A248") },
      { name: "PostgreSQL", icon: withColor(<SiPostgresql />, "#336791") },
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    college: "Sharad Institute of Technology",
    board: "DBATU - Dr. Babasaheb Ambedkar Technological University",
    marks: "8.64 CGPA",
    passingout: "2023-24",
  },
  {
    degree: "Diploma in Computer Science",
    college: "Sanjay Bhokare Groups of Institues",
    board: "MSBTE - Maharashtra State Board of Technical Education",
    marks: "89.94%",
    passingout: "2020-21",
  },
];

// Reusable Components
type SkillBadgeProps = {
  name: string;
  icon: ReactNode;
};
const SkillBadge = ({ name, icon }: SkillBadgeProps) => (
  <span
    className="flex items-center justify-center gap-2 border p-3 rounded-xl bg-accent/30"
    onMouseEnter={() => handleCursorEnter(5)}
    onMouseLeave={handleCursorLeave}
  >
    <span className="text-4xl md:text-6xl">{icon}</span>
    <span className="text-base md:text-2xl font-black">{name}</span>
  </span>
);

type TechCardProps = {
  domain: string;
  technologies: { name: string; icon: ReactNode }[];
};
const TechCard = ({ domain, technologies }: TechCardProps) => (
  <div className="flex flex-col gap-3 p-3 border rounded-xl bg-background shadow-md hover:shadow-lg transition-all duration-200">
    <h4 className="text-xl font-bold text-primary border-b border-border border-dashed">
      {domain}
    </h4>
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 flex-wrap bg-accent/30 border rounded-lg px-3 py-2 text-sm transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 active:-translate-y-0.5"
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={handleCursorLeave}
        >
          <span className="text-xl">{tech.icon}</span>
          <span className="font-semibold">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

type EducationCardProps = {
  degree: string;
  college: string;
  board: string;
  marks: string;
  passingout: string;
};
const EducationCard = ({ degree, college, board, marks, passingout }: EducationCardProps) => (
  <div className="flex flex-col items-start justify-center gap-1 p-5 border rounded-xl bg-background shadow-sm">
    <p
      className="text-2xl font-black text-primary border-b border-border border-dashed"
      onMouseEnter={() => handleCursorEnter(3)}
      onMouseLeave={handleCursorLeave}
    >
      {degree}
    </p>
    <p className="text-md font-medium text-muted-foreground">{college}</p>
    <p className="text-md font-medium text-muted-foreground">
      <span className="text-primary font-medium">Board:</span> {board}
    </p>
    <p className="text-md font-normal text-muted-foreground">
      <span className="text-primary font-medium">Marks:</span> {marks}
    </p>
    <p className="text-md font-normal">
      <span className="text-primary font-medium">Passing Year:</span> {passingout}
    </p>
  </div>
);

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pranavrao541@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    });
  };

  return (
    <Section sectionName="about" className="py-20 px-3">
      <h2 className="text-6xl font-bold text-center mb-10">
        <span className="text-muted">About</span> Me
      </h2>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center flex-wrap gap-3">
          {SKILLS.map((skill, idx) => (
            <SkillBadge key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>

        <div className="w-full md:w-3/4 flex flex-col items-start justify-center">
          <h3 className="text-2xl font-black text-primary mb-4">Currently Working On</h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {WORKINGON.map((group, idx) => (
              <TechCard key={idx} domain={group.domain} technologies={group.technologies} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4 flex flex-col">
          <h3 className="text-2xl font-semibold text-primary">Education</h3>

          <Tabs defaultValue={EDUCATION[0].degree.toLowerCase().split(" ")[0]} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 md:grid md:grid-cols-2 w-full rounded-lg">
              {EDUCATION.map((edu, idx) => (
                <TabsTrigger
                  key={idx}
                  value={edu.degree.toLowerCase().split(" ")[0]}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white capitalize"
                  onMouseEnter={() => handleCursorEnter(1.5)}
                  onMouseLeave={handleCursorLeave}
                >
                  {edu.degree.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {EDUCATION.map((edu, idx) => (
              <TabsContent key={idx} value={edu.degree.toLowerCase().split(" ")[0]}>
                <EducationCard
                  degree={edu.degree}
                  college={edu.college}
                  board={edu.board}
                  marks={edu.marks}
                  passingout={edu.passingout}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border p-1 md:p-5 rounded-lg bg-background shadow w-full">
          <h3 className="text-xl text-foreground font-semibold">Get in Touch</h3>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Button
              onClick={handleCopyEmail}
              variant="outline"
              className="flex items-center gap-2 active:scale-95"
              onMouseEnter={() => handleCursorEnter(2)}
              onMouseLeave={handleCursorLeave}
            >
              {emailCopied ? <IoCheckmarkDone /> : <GoCopy />}
              {emailCopied ? "Email Copied" : "Copy Email"}
            </Button>
            <Socials />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
