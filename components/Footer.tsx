import { negocio, direccionTexto } from "@/content/negocio";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="pie">
      <div className="wrap">
        <div className="pie__g">
          <div>
            <Logo negativo />
            <p style={{ marginTop: 16, maxWidth: "34ch" }}>{negocio.nombre}. Lámina, PTR, montén y transformación en Tepic. Desde {negocio.desde}.</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>{direccionTexto}</li>
              {negocio.telefonos.map((t) => (<li key={t.tel}><a href={`tel:${t.tel}`}>{t.etiqueta}</a></li>))}
              <li>WhatsApp: {negocio.whatsapp.etiqueta}</li>
            </ul>
          </div>
          <div>
            <h4>Redes</h4>
            <ul>
              <li><a href={negocio.redes.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={negocio.redes.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={negocio.fichaGoogle} target="_blank" rel="noopener noreferrer">Google Maps</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacidad">Aviso de privacidad</a></li>
              <li><a href="/terminos">Términos de uso</a></li>
              <li><a href="/antifraude">Aviso de seguridad</a></li>
            </ul>
          </div>
        </div>
        <div className="firma">
          <span>© {new Date().getFullYear()} {negocio.nombre}</span>
          <a href={negocio.firma.url} target="_blank" rel="noopener nofollow">{negocio.firma.texto}</a>
        </div>
      </div>
    </footer>
  );
}
