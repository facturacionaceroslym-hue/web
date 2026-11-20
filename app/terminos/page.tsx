import type { Metadata } from "next";
import Pagina from "@/components/Pagina";
import { negocio } from "@/content/negocio";
export const metadata: Metadata = { title: "Términos de uso", alternates: { canonical: "/terminos" } };
export default function Terminos() {
  return (
    <Pagina titulo="Términos de uso" legal>
      <h2>Información</h2>
      <p>Esta página presenta los productos y servicios de {negocio.nombre}. La información es de carácter informativo y puede cambiar sin previo aviso.</p>
      <h2>Precios y disponibilidad</h2>
      <p>La página no publica precios. Cada cotización se confirma por WhatsApp o por teléfono y depende de calibre, medida, cantidad, disponibilidad y entrega. Una cotización no es una venta hasta que ambas partes confirman el pedido.</p>
      <h2>Entrega</h2>
      <p>{negocio.entrega.texto} {negocio.entrega.sinMinimo}</p>
      <h2>Imágenes y marcas</h2>
      <p>Las imágenes son ilustrativas. Las marcas de terceros mencionadas pertenecen a sus propietarios y se nombran solo para describir productos disponibles.</p>
      <h2>Reseñas</h2>
      <p>Las reseñas mostradas provienen de la ficha pública de Google del negocio y pertenecen a sus autores.</p>
      <h2>Ley aplicable</h2>
      <p>Estos términos se rigen por las leyes de México. Para cualquier controversia, las partes se someten a los tribunales competentes de Tepic, Nayarit.</p>
    </Pagina>
  );
}
