import Foto from "./Foto";
import Reveal from "./Reveal";

/** Capítulo de producto en fondo claro: texto + foto grande en marco; el gráfico SVG se dibuja como sello sobre el rótulo. */
export default function Capitulo({ id, rotulo, titulo, tituloId, foto, alt, posicion = "center", der = false, papel = false, ratio = "4 / 5", grafico, children }: { id: string; rotulo: string; titulo: React.ReactNode; tituloId: string; foto: string; alt: string; posicion?: string; der?: boolean; papel?: boolean; ratio?: string; grafico: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className={`cap${der ? " cap--der" : ""}${papel ? " cap--papel" : ""}`} id={id} aria-labelledby={tituloId}>
      <div className="wrap cap__in">
        <Reveal className="cap__txt">
          <div className="cap__sello" aria-hidden="true">{grafico}</div>
          <p className="rotulo">{rotulo}</p>
          <h2 id={tituloId}>{titulo}</h2>
          {children}
        </Reveal>
        <Reveal i={1} className="cap__foto"><Foto nombre={foto} alt={alt} ratio={ratio} posicion={posicion} sizes="(min-width: 900px) 50vw, 100vw" /></Reveal>
      </div>
    </section>
  );
}
