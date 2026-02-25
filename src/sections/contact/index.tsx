import { SiMinutemailer, SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import SocialButton from "@/components/social-button";
import { useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { GoCopy } from "react-icons/go";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pranav-rao-09a79b231/",
    icon: <SiLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ray541",
    icon: <SiGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/pranav.rao.338",
    icon: <SiFacebook />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/pranav_rao0504",
    icon: <SiInstagram />,
    label: "Instagram",
  },
];

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pranavrao541@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    });
  };

  return (
    <Section sectionName="contact" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        Contact <span className="text-muted">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <p className="text-lg font-light text-center text-muted-foreground">
          If you have any questions or want to get in touch, feel free to drop me an email. I would
          love to hear from you!
        </p>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 active:scale-95"
              onMouseEnter={() => handleCursorEnter(2)}
              onMouseLeave={handleCursorLeave}
              disabled={emailCopied}
            >
              {emailCopied ? <IoCheckmarkDone /> : <GoCopy />}
              {emailCopied ? "Email Copied" : "Copy Email"}
            </Button>
            <Button
              variant="default"
              asChild
              onMouseEnter={() => handleCursorEnter(2)}
              onMouseLeave={handleCursorLeave}
              className="active:scale-95"
            >
              <a href="mailto:pranavrao541@gmail.com">
                Let's Connect
                <SiMinutemailer />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
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
