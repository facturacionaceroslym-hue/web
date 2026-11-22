"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { negocio } from "@/content/negocio";

const CLAVE = "lym-aviso-antifraude";
const CADA_DIAS = 7;       // vuelve a mostrarse cada 7 días
const RETRASO_MS = 3500;   // aparece unos segundos después de cargar

/** Aviso no bloqueante: otras personas usan el nombre del negocio. Recuerda el cierre en localStorage (solo preferencia local; sin analítica). */
export default function AvisoAntifraude() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ruta === "/antifraude") return;
    let ultimo = 0;
    try { ultimo = Number(localStorage.getItem(CLAVE) ?? 0); } catch { /* sin almacenamiento: se muestra cada visita */ }
    if (Date.now() - ultimo < CADA_DIAS * 86400000) return;
    const t = setTimeout(() => setAbierto(true), RETRASO_MS);
    return () => clearTimeout(t);
  }, [ruta]);

  const cerrar = () => {
    setAbierto(false);
    try { localStorage.setItem(CLAVE, String(Date.now())); } catch { /* ignorar */ }
  };

  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e: KeyboardEvent) => { if (e.key === "Escape") cerrar(); };
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [abierto]);

  if (!abierto) return null;
  return (
    <aside className="aviso" role="dialog" aria-modal="false" aria-labelledby="aviso-t">
      <button className="aviso__x" onClick={cerrar} aria-label="Cerrar aviso" ref={btn}>×</button>
      <p className="aviso__tag">Aviso importante</p>
      <h2 id="aviso-t">Cuidado: otras personas usan nuestro nombre</h2>
      <p>Para evitar fraudes, confirma siempre por nuestros canales oficiales antes de depositar o compartir tus datos.</p>
      <ul>
        <li>WhatsApp: <a href={`tel:${negocio.whatsapp.numero ? "+" + negocio.whatsapp.numero : ""}`}>{negocio.whatsapp.etiqueta}</a></li>
        <li>Teléfonos: {negocio.telefonos.map((t, i) => (<span key={t.tel}>{i ? " · " : ""}<a href={`tel:${t.tel}`}>{t.etiqueta}</a></span>))}</li>
        <li>Correo: <a href={`mailto:${negocio.correo}`}>{negocio.correo}</a></li>
      </ul>
      <div className="aviso__bt">
        <a className="btn btn--wa" href="/antifraude" onClick={cerrar}>Ver canales oficiales</a>
        <button className="btn btn--linea" onClick={cerrar}>Entendido</button>
      </div>
      <p className="aviso__legal">Al seguir navegando aceptas nuestro <a href="/privacidad">Aviso de privacidad</a> y los <a href="/terminos">Términos de uso</a>.</p>
    </aside>
  );
}
