import { waLink } from "@/lib/whatsapp";
import type { Origen } from "@/content/whatsapp";
import { IconoWA } from "@/lib/iconos";

export default function BotonWhatsApp({ origen, children, variante = "wa", className = "" }: { origen: Origen; children: React.ReactNode; variante?: "wa" | "linea"; className?: string }) {
  return (
    <a className={`btn btn--${variante} ${className}`} href={waLink(origen)} target="_blank" rel="noopener noreferrer" data-origen={origen}>
      <IconoWA />
      <span>{children}</span>
    </a>
  );
}
