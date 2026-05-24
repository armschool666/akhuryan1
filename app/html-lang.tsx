"use client";
import { useEffect } from "react";

export function HtmlLangSetter({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-scroll-behavior", "smooth");
  }, [locale]);
  return null;
}
