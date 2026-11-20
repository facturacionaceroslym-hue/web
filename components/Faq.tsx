"use client";
import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [abierto, setAbierto] = useState<number | null>(null);
  return (
    <div className="faq">
      {items.map((it, i) => {
        const on = abierto === i;
        return (
          <div className={`faq__item${on ? " abierto" : ""}`} key={it.q}>
            <h3>
              <button type="button" aria-expanded={on} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setAbierto(on ? null : i)}>{it.q}</button>
            </h3>
            <div className="faq__cuerpo" id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`}>
              <div><p>{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
