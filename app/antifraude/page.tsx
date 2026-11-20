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
        <li>Redes sociales oficiales: <a href={negocio.redes.facebook}>Facebook</a> e <a href={negocio.redes.instagram}>Instagram</a>. Verifica siempre la insignia de verificación.</li>
      </ul>
      <h2>Recuerda</h2>
      <p>Nunca solicitamos pagos por adelantado a cuentas personales ni pedimos información financiera por WhatsApp o redes sociales. Si recibes una comunicación sospechosa, repórtala.</p>
      <div className="acciones"><BotonWhatsApp origen="antifraude">Confirmar un contacto por WhatsApp</BotonWhatsApp></div>
    </Pagina>
  );
}
