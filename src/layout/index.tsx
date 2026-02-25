import { useState } from "react";
import { ReactLenis } from "lenis/react";

import Preloader from "@/components/pre-loader";
import ProgressBar from "@/components/progress-bar";
import Header from "@/components/header";
import { Main } from "./main";
import Home from "@/sections/home";
import About from "@/sections/about";
import Projects from "@/sections/projects";
// import LittleInfo from "@/sections/little-info";
import Experience from "@/sections/experience";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import CustomCursor from "@/components/custom-cursor";
import { ModeToggle } from "@/components/mode-toggle";

const options = {
  duration: 2,
  lerp: 0.05,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  // For mobile devices
  smoothWheel: true,
  smoothTouch: true,
  touchMultiplier: 1.5,
  wheelMultiplier: 1,
  infinite: false,
};

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <ProgressBar />
          <CustomCursor />
          <Header />
          <ModeToggle className="fixed bottom-1 right-1 transition-colors z-5" />
          <Main>
            <ReactLenis root options={options}>
              <Home />
              <About />
              <Projects />
              {/* <LittleInfo /> */}
              <Experience />
              <Contact />
            </ReactLenis>
          </Main>
          <Footer />
          <ScrollToTop className="fixed bottom-10 right-5 transition-colors z-5" />
        </>
      )}
    </>
  );
};

export default Layout;
