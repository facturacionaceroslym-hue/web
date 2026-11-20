"use client";
import { waLink } from "@/lib/whatsapp";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main id="contenido" className="pag"><div className="wrap">
      <h1>Algo falló de nuestro lado.</h1>
      <p>Intenta de nuevo. Si el problema sigue, escríbenos por WhatsApp o llámanos.</p>
      <div className="acciones">
        <button className="btn btn--linea" type="button" onClick={() => reset()}>Reintentar</button>
        <a className="btn btn--wa" href={waLink("error")} target="_blank" rel="noopener noreferrer">Cotizar por WhatsApp</a>
      </div>
    </div></main>
  );
}
