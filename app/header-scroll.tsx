"use client";
import { useEffect } from "react";

export function HeaderScrollController() {
  useEffect(() => {
    let lastY = window.scrollY;
    const header = document.querySelector(".site-header") as HTMLElement | null;
    if (!header) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        header.classList.remove("site-header--hidden");
      } else if (y > lastY + 4) {
        header.classList.add("site-header--hidden");
      } else if (y < lastY - 4) {
        header.classList.remove("site-header--hidden");
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
