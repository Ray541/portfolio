import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Section from "../Section/Section";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import SocialButton from "../SocialButton/SocialButton";
import resume from "../../assets/Pranav's_Resume.pdf";
import { Button } from "@/components/ui/button";
import { handleCursorEnter, handleCursorLeave } from "../../utils/gsapUtils";

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
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const socialsRef = useRef(null);
  const socialsSmallDevicesRef = useRef(null);

  useGSAP(() => {
    gsap.set(headlineRef.current, { y: 30, opacity: 0 });
    gsap.set(paragraphRef.current, { y: 20, opacity: 0 });
    gsap.set(buttonRef.current, { y: 10, opacity: 0 });
    gsap.set(socialsRef.current, { x: 20, opacity: 0 });
    gsap.set(socialsSmallDevicesRef.current, { y: 10, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "expo.inOut", duration: 0.8 } });
    tl.to(headlineRef.current, { y: 0, opacity: 1 })
      .to(paragraphRef.current, { y: 0, opacity: 1 }, "-=0.3")
      .to(buttonRef.current, { y: 0, opacity: 1 }, "-=0.4")
      .to(socialsRef.current, { x: 0, opacity: 1 }, "-=0.5")
      .to(socialsSmallDevicesRef.current, { y: 0, opacity: 1 }, "-=0.5");
  }, []);

  return (
    <Section sectionName="home" className="min-h-[100svh] lg:min-h-dvh">
      <div className="flex flex-col items-center justify-center text-center lg:text-start gap-4 sm:gap-2 lg:w-3/4  p-3 md:p-0">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground"
          ref={headlineRef}
        >
          Hi, I'm{" "}
          <span
            className="font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            onMouseEnter={() => handleCursorEnter(12)}
            onMouseLeave={handleCursorLeave}
          >
            Pranav Rao
          </span>
          .
        </h1>

        <p className="text-center font-medium text-foreground leading-relaxed" ref={paragraphRef}>
          Passionate{" "}
          <span
            className="font-extrabold text-lg lg:text-xl xl:text-2xl"
            onMouseEnter={() => handleCursorEnter(2.5)}
            onMouseLeave={handleCursorLeave}
          >
            Frontend Developer
          </span>{" "}
          started my career in Web Dev. I specialize in using{" "}
          <span
            className="font-extrabold text-lg lg:text-xl xl:text-2xl"
            onMouseEnter={() => handleCursorEnter(2.5)}
            onMouseLeave={handleCursorLeave}
          >
            React.js
          </span>{" "}
          to build modern, dynamic and efficient websites.
        </p>

        <Button
          variant="default"
          className="gap-2 mt-2 active:scale-95 opacity-0"
          ref={buttonRef}
          onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={handleCursorLeave}
        >
          <MdOutlineFileDownload />
          <span>Download CV</span>
        </Button>

        <div className="flex flex-col items-center justify-center gap-5">
          <div
            className="hidden lg:flex lg:gap-2 absolute right-5 top-1/2 transform -translate-y-1/2 z-5 flex-col items-center before:content-[''] before:w-px before:h-30 before:bg-border after:content-[''] after:w-px after:h-30 after:bg-border"
            ref={socialsRef}
          >
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>

          <div className="flex gap-2 lg:hidden" ref={socialsSmallDevicesRef}>
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
