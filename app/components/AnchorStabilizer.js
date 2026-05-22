"use client";

import { useEffect } from "react";

export default function AnchorStabilizer() {
  useEffect(() => {
    if (window.location.hash !== "#consultation") {
      return;
    }

    const target = document.getElementById("consultation");
    if (!target) {
      return;
    }

    const settleScroll = () => {
      const header = document.querySelector(".site-header");
      const headerHeight = header?.getBoundingClientRect().height || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetTop - headerHeight - 28,
        behavior: "auto",
      });
    };

    settleScroll();
    const timers = [120, 420, 900].map((delay) => window.setTimeout(settleScroll, delay));

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}
