"use client";
import { useEffect, useState } from "react";
import { negocio } from "@/content/negocio";
import { waLink } from "@/lib/whatsapp";
import { IconoWA, IconoLlamar } from "@/lib/iconos";

export default function Header({ logo }: { logo: React.ReactNode }) {
  const [compacta, setCompacta] = useState(false);
  useEffect(() => {
    const f = () => setCompacta(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`cab${compacta ? " cab--compacta" : ""}`}>
      <div className="wrap cab__in">
        {logo}
        <nav aria-label="Principal">
          <a href="#productos">Productos</a>
          <a href="#transformacion">Transformación</a>
          <a href="#entrega">Entrega</a>
          <a href="#resenas">Reseñas</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>
        <div className="cab__acc">
          <a className="btn btn--linea cab__ico" href={`tel:${negocio.telefonos[0].tel}`} aria-label="Llamar"><IconoLlamar /></a>
          <a className="cab__tel" href={`tel:${negocio.telefonos[0].tel}`}>{negocio.telefonos[0].etiqueta}</a>
          <a className="btn btn--wa" href={waLink("cabecera")} target="_blank" rel="noopener noreferrer" data-origen="cabecera">
            <IconoWA /><span className="t">Cotizar por WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
