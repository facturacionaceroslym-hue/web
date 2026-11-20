import type { Metadata } from "next";
import Pagina from "@/components/Pagina";
import { negocio, direccionTexto } from "@/content/negocio";
export const metadata: Metadata = { title: "Aviso de privacidad", alternates: { canonical: "/privacidad" } };
export default function Privacidad() {
  return (
    <Pagina titulo="Aviso de privacidad" legal>
      <h2>Responsable</h2>
      <p>{negocio.nombre}, con domicilio en {direccionTexto}. Contacto: {negocio.correo} · {negocio.telefonos[0].etiqueta}.</p>
      <h2>Qué datos tratamos</h2>
      <p>Esta página no tiene formularios que almacenen información ni cuentas de usuario. Si nos escribes por WhatsApp o nos llamas, recibimos los datos que tú nos compartas (por ejemplo tu nombre, el material que necesitas, medidas, cantidad y ciudad).</p>
      <h2>Para qué los usamos</h2>
      <p>Solo para responder tu cotización, coordinar la entrega o el retiro y dar seguimiento a tu pedido.</p>
      <h2>Terceros</h2>
      <p>WhatsApp (Meta) procesa los mensajes que envías desde su aplicación. El mapa de la sección de ubicación es de Google Maps y carga contenido de Google. Cada servicio se rige por su propio aviso de privacidad.</p>
      <h2>Cookies y analítica</h2>
      <p>Esta página no usa herramientas de analítica propias ni cookies publicitarias. El mapa incrustado de Google puede usar sus propias cookies.</p>
      <h2>Derechos</h2>
      <p>Puedes solicitar acceso, rectificación o cancelación de tus datos, o oponerte a su uso, escribiendo a {negocio.correo}.</p>
      <h2>Cambios</h2>
      <p>Si este aviso cambia, publicaremos la versión actualizada en esta misma página.</p>
    </Pagina>
  );
}
