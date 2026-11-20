"use client";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/** Aparición al entrar en pantalla. Sin JS el contenido se ve igual (clase .sin-js en <html>). */
export default function Reveal({ children, i = 0, className = "", as: Tag = "div" }: { children: ReactNode; i?: number; className?: string; as?: "div" | "article" | "li" | "section" }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("visto"); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visto"); io.unobserve(e.target); } }), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as any;
  return <Comp ref={ref} className={`reveal ${className}`} style={{ "--i": i } as CSSProperties}>{children}</Comp>;
}
