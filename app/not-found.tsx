import Pagina from "@/components/Pagina";
import BotonWhatsApp from "@/components/BotonWhatsApp";
export default function NoEncontrada() {
  return (
    <Pagina titulo="Esta página no existe.">
      <p>Puede que el enlace esté mal escrito o que la página ya no esté disponible.</p>
      <div className="acciones"><a className="btn btn--linea" href="/">Volver al inicio</a><BotonWhatsApp origen="no-encontrada">Cotizar por WhatsApp</BotonWhatsApp></div>
    </Pagina>
  );
}
