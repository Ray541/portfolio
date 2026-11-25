import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { RxLink2 } from "react-icons/rx";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import { GitHubCalendar } from "react-github-calendar";
import "react-activity-calendar/tooltips.css";
import { PROJECTS } from "@/data/projects";

const badgeStyle =
  "flex items-center justify-center gap-1.5 border-2 border-border bg-accent/20 dark:bg-accent/30 hover:bg-accent/40 dark:hover:bg-accent/50 px-2 py-1.5 rounded-lg hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium tracking-tight";

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  return (
    <Section sectionName="project" className="py-20 px-3 flex-col">
      <h2 className="section-title mb-16">
        My <span className="text-muted">Projects</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        value={activeAccordion}
        onValueChange={setActiveAccordion}
        className="w-full sm:w-3/4 space-y-5"
      >
        {PROJECTS.map((project, index) => {
          const value = `item-${index}`;
          return (
            <AccordionItem
              key={index}
              value={value}
              className="border-2 last:border-b-2 rounded-xl overflow-hidden bg-background"
            >
              <AccordionTrigger
                className={`p-5 flex items-center justify-between text-xl lg:text-2xl font-bold bg-muted/20 [&>svg]:text-inherit ${
                  activeAccordion === value
                    ? "border-b-2 underline bg-foreground text-background"
                    : ""
                }`}
                onMouseEnter={() => handleCursorEnter(3)}
                onMouseLeave={handleCursorLeave}
              >
                {project.projectName}
              </AccordionTrigger>

              <AccordionContent className="px-5 pt-5 pb-5 space-y-5">
                {/* Description */}
                <div>
                  <h4 className="text-sm uppercase font-black tracking-wide text-muted-foreground mb-3">
                    Description
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.projectDesc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm uppercase font-black tracking-wide text-muted-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item, i) => (
                      <span key={i} className={badgeStyle}>
                        <span className="text-base">
                          <item.Icon color={item.color} />
                        </span>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributions */}
                <div>
                  <h4 className="text-sm uppercase font-black tracking-wide text-muted-foreground mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {project.contributions.map((point, i) => (
                      <li key={i} className="flex items-start justify-start gap-2 text-base">
                        <span className="mt-2 h-2 w-2 rounded-full bg-transparent shrink-0 border-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap pt-2">
                  {project.projectLink && (
                    <Button
                      asChild
                      size="sm"
                      onMouseEnter={() => handleCursorEnter(2)}
                      onMouseLeave={handleCursorLeave}
                    >
                      <a href={project.projectLink} target="_blank">
                        Live <HiExternalLink />
                      </a>
                    </Button>
                  )}
                  {project.projectGitLink && (
                    <Button
                      asChild
                      variant="link"
                      size="sm"
                      onMouseEnter={() => handleCursorEnter(2)}
                      onMouseLeave={handleCursorLeave}
                    >
                      <a href={project.projectGitLink} target="_blank">
                        Code <RxLink2 />
                      </a>
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Section>
  );
};

export default Projects;
