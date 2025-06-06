"use client";

import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ScrollProgress() {
  const [, setScrollProgress] = useState(0);

  useEffect(() => {
    // Configure NProgress
    NProgress.configure({
      //   minimum: 0.1,
      easing: "ease",
      speed: 300,
      showSpinner: false,
    });

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = window.scrollY;
          const windowHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scroll = Math.min(Math.max(totalScroll / windowHeight, 0), 1);

          setScrollProgress(scroll);
          NProgress.set(scroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      NProgress.remove();
    };
  }, []);

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: linear-gradient(to right, #20c943, #15b6b0);
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #20c943, 0 0 5px #15b6b0;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  );
}
