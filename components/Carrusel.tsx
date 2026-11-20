"use client";
import { useEffect, useRef, useState } from "react";

/** Carrusel horizontal tipo Apple: tarjetas con scroll-snap, botones anterior/siguiente y sin dependencias. */
export default function Carrusel({ children, etiqueta }: { children: React.ReactNode; etiqueta: string }) {
  const pista = useRef<HTMLDivElement>(null);
  const [ini, setIni] = useState(true);
  const [fin, setFin] = useState(false);

  const medir = () => {
    const el = pista.current; if (!el) return;
    setIni(el.scrollLeft <= 4);
    setFin(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };
  useEffect(() => { medir(); const el = pista.current; if (!el) return; const ro = new ResizeObserver(medir); ro.observe(el); return () => ro.disconnect(); }, []);

  const mover = (dir: 1 | -1) => {
    const el = pista.current; if (!el) return;
    const tarjeta = el.querySelector("li") as HTMLElement | null;
    const paso = (tarjeta?.offsetWidth ?? 300) + 20;
    el.scrollBy({ left: dir * paso * (window.innerWidth > 900 ? 2 : 1), behavior: "smooth" });
  };

  return (
    <div className="carr" role="region" aria-roledescription="carrusel" aria-label={etiqueta}>
      <div className="carr__pista" ref={pista} onScroll={medir} tabIndex={0}>
        <ul>{children}</ul>
      </div>
      <div className="carr__ctl wrap">
        <button type="button" onClick={() => mover(-1)} disabled={ini} aria-label="Anterior"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 5l-7 7 7 7" /></svg></button>
        <button type="button" onClick={() => mover(1)} disabled={fin} aria-label="Siguiente"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 5l7 7-7 7" /></svg></button>
      </div>
    </div>
  );
}
