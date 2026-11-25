import { SiMinutemailer } from "react-icons/si";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import SocialButton from "@/components/social-button";
import { useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { GoCopy } from "react-icons/go";
import { Loader } from "lucide-react";
import { SOCIAL_LINKS, SITE } from "@/data/common";

const Contact = () => {
  const [copyState, setCopyState] = useState<"idle" | "loading" | "copied">("idle");

  const handleCopyEmail = () => {
    setCopyState("loading");
    navigator.clipboard.writeText(SITE.email).then(() => {
      setTimeout(() => {
        setCopyState("copied");
        setTimeout(() => setCopyState("idle"), 1000);
      }, 1000);
    });
  };

  return (
    <Section sectionName="contact" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        Contact <span className="text-muted">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <p className="text-lg font-light text-center text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 active:scale-95 w-[140px]"
              onMouseEnter={() => handleCursorEnter(2)}
              onMouseLeave={handleCursorLeave}
              disabled={copyState !== "idle"}
            >
              {copyState === "idle" && (
                <>
                  <GoCopy />
                  <span>Copy Email</span>
                </>
              )}
              {copyState === "loading" && (
                <>
                  <Loader className="animate-spin" />
                  <span>Copying...</span>
                </>
              )}
              {copyState === "copied" && (
                <>
                  <IoCheckmarkDone />
                  <span>Copied!</span>
                </>
              )}
            </Button>
            <Button
              variant="default"
              asChild
              onMouseEnter={() => handleCursorEnter(2)}
              onMouseLeave={handleCursorLeave}
              className="active:scale-95"
            >
              <a href={`mailto:${SITE.email}`}>
                Let's Connect
                <SiMinutemailer />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={<social.Icon />}
                label={social.label}
                onMouseEnter={() => handleCursorEnter(3)}
                onMouseLeave={handleCursorLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
