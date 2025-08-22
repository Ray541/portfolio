"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LenisRef, ReactLenis } from "lenis/react";

import Preloader from "@/components/Preloader";
import HomeSection from "@/components/Home";
import About from "@/components/About";
import ProgressBar from "@/components/ui/progress-bar";
import Header from "@/components/Header";
import { ModeToggle } from "@/components/ui/mode-toggle";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import LittleInfo from "@/components/LittleInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const options = {
  autoRaf: false,
  duration: 2,
  lerp: 0.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenisRef = useRef<LenisRef>(null);

  // Drive Lenis with GSAP's ticker
  useEffect(() => {
    const update = (time: number) => {
      // GSAP gives seconds; Lenis expects ms
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  // Wire Lenis for ScrollTrigger
  useEffect(() => {
    if (!isLoaded) return; // wait until content is in the DOM
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Use the root scroller  (<ReactLenis root />)
    const scroller = document.documentElement;

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        } else {
          // Current scroll
          return window.scrollY || window.pageYOffset || 0;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scroller.style.transform ? "transform" : "fixed",
    });

    // Scroll Trigger uses root scroller by default
    ScrollTrigger.defaults({ scroller });

    // First refresh after everything is mounted
    requestAnimationFrame(() => ScrollTrigger.refresh());

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      lenis.off("scroll", onLenisScroll);
      window.removeEventListener("resize", onResize);
      // Reset defaults if needed
      // ScrollTrigger.defaults({ scroller: window });
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <ReactLenis root options={options} ref={lenisRef} />
          <ProgressBar />
          <Header />
          <main className="flex flex-col min-h-screen">
            <HomeSection />
            <About />
            <Projects />
            <LittleInfo />
            <Work />
            <Contact />
          </main>
          <ModeToggle className="fixed bottom-3 right-7 active:scale-90 z-5 cursor-pointer" />
          <ScrollToTop className="fixed bottom-14 right-7 active:scale-90 z-5 cursor-pointer" />
          <Footer />
        </>
      )}
    </>
  );
}
