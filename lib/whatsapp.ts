import { negocio } from "@/content/negocio";
import { origenes, type Origen } from "@/content/whatsapp";

/** Arma el enlace de WhatsApp con texto prellenado (codificado una sola vez). */
export function waLink(origen: Origen, textoPropio?: string): string {
  const texto = textoPropio ?? origenes[origen];
  return `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(texto)}`;
}
