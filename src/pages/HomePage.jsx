import React, { useEffect } from "react";
import Home from "../components/Home/Home";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init();

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 2,
    });

    const handleScroll = (e) => {
      console.log(e);
    };

    lenis.on("scroll", handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup Lenis scroll event
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Home />
      <Body />
      <Footer />
    </>
  );
}

export default HomePage;
