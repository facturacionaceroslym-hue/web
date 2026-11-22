import type { Metadata } from "next";
import Pagina from "@/components/Pagina";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import { negocio, direccionTexto } from "@/content/negocio";
export const metadata: Metadata = { title: "Aviso de seguridad: protégete contra fraudes", alternates: { canonical: "/antifraude" } };
export default function Antifraude() {
  return (
    <Pagina titulo="Protégete contra fraudes">
      <p><strong>Alerta de seguridad.</strong> Hemos detectado personas que se hacen pasar por {negocio.nombreCorto} para cometer fraudes. Para tu seguridad, confía solo en nuestros canales oficiales.</p>
      <h2>Canales oficiales</h2>
      <ul>
        <li>Tienda física: {direccionTexto}.</li>
        <li>Sitio web oficial: {negocio.sitioUrl.replace("https://", "")}.</li>
        <li>Teléfonos: {negocio.telefonos.map((t) => t.etiqueta).join(" y ")} · WhatsApp: {negocio.whatsapp.etiqueta}.</li>
        <li>Redes sociales oficiales: <a href={negocio.redes.facebook}>Facebook</a> e <a href={negocio.redes.instagram}>Instagram</a>.</li>
        <li>Correo: {negocio.correo}.</li>
      </ul>
      <h2>Recuerda</h2>
      <p>Antes de hacer un pago o depósito, o de compartir datos personales o bancarios, confirma por teléfono o por WhatsApp en los números oficiales de arriba que quien te escribe realmente es de {negocio.nombreCorto}. Si recibes una comunicación sospechosa, no respondas ni pagues y avísanos por esos mismos canales.</p>
      <div className="acciones"><BotonWhatsApp origen="antifraude">Confirmar un contacto por WhatsApp</BotonWhatsApp></div>
    </Pagina>
  );
}
