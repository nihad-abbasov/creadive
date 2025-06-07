"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollProgress = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollYProgress(progress);
    };

    updateScroll(); // initial load
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-black z-[9999]"
      style={{
        width: `${scrollYProgress * 100}%`,
      }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};
