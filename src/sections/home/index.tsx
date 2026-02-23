import { MdOutlineFileDownload } from "react-icons/md";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import resume from "@/assets/Pranav's_Resume.pdf";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import SocialButton from "@/components/social-button";
import AlternateText from "@/components/animations/text-animations/AlternateText";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { motion, Variants } from "motion/react";

const MotionButton = motion.create(Button);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // controls delay between children
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const xItemVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

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

const Home = () => {
  return (
    <Section sectionName="home" className="min-h-[100svh] lg:min-h-dvh overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="min-h-[100svh] lg:min-h-dvh flex flex-col items-center justify-center lg:w-3/4 p-3 md:p-0"
      >
        <motion.h1
          variants={itemVariants}
          className="w-full text-center lg:text-start text-4xl md:text-5xl lg:text-8xl xl:pl-10 font-semibold text-foreground"
        >
          Hi, I'm
        </motion.h1>
        <motion.div variants={itemVariants} className="w-full text-center lg:text-end">
          <AlternateText
            initialText="Pranav Rao."
            altText="Web Dev IN."
            // display="block"
            initialTextClassName="w-full font-black text-foreground text-4xl sm:text-5xl md:text-7xl lg:text-9xl"
            altTextClassName="w-full font-black text-foreground text-4xl sm:text-5xl md:text-7xl lg:text-9xl"
            onMouseEnter={() => handleCursorEnter(12)}
            onMouseLeave={() => handleCursorLeave()}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground leading-relaxed my-2"
        >
          2 years of experience developing modern web interfaces with{" "}
          <span
            className="font-extralight text-lg lg:text-xl xl:text-2xl"
            onMouseEnter={() => handleCursorEnter(3)}
            onMouseLeave={() => handleCursorLeave()}
          >
            React.js
          </span>
          , building scalable solutions that prioritize usability and performance.
        </motion.p>

        <MotionButton
          variants={itemVariants}
          variant="default"
          className="gap-2 my-2 transition-colors"
          onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={() => handleCursorLeave()}
          whileTap={{
            scale: 0.95,
          }}
        >
          <MdOutlineFileDownload />
          <span>Download CV</span>
        </MotionButton>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.div
            variants={xItemVariants}
            className="hidden lg:flex lg:gap-2 absolute right-5 top-1/2 transform -translate-y-1/2 z-5 flex-col items-center before:content-[''] before:w-px before:h-30 before:bg-border after:content-[''] after:w-px after:h-30 after:bg-border"
            onMouseEnter={() => handleCursorEnter(3)}
            onMouseLeave={() => handleCursorLeave()}
          >
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-2 lg:hidden">
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Home;
