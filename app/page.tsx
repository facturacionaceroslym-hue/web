import type { CSSProperties } from "react";
import { negocio, direccionTexto } from "@/content/negocio";
import { masMateriales, servicios, pasos, valores, constructores, productosActivos } from "@/content/productos";
import { catalogo } from "@/content/catalogo";
import { resenas } from "@/content/resenas";
import { faq } from "@/content/faq";
import { tablaPTR } from "@/content/tablas";
import { waLink } from "@/lib/whatsapp";
import type { Origen } from "@/content/whatsapp";
import { jsonLd } from "@/lib/schema";
import { IconoLlamar, Estrellas } from "@/lib/iconos";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Foto from "@/components/Foto";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import Cotizador from "@/components/Cotizador";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import TablaMedidas from "@/components/TablaMedidas";
import Capitulo from "@/components/Capitulo";
import Carrusel from "@/components/Carrusel";
import MapaNayarit from "@/components/MapaNayarit";
import { GraficoTecho, GraficoPTR, GraficoLamina } from "@/components/Graficos";

const consulta = encodeURIComponent(negocio.mapa.consulta);
const mapaSrc = `https://www.google.com/maps?q=${consulta}&ftid=${negocio.mapa.ftid}&z=17&output=embed`;
const comoLlegar = `https://www.google.com/maps/dir/?api=1&destination=${consulta}`;
const anios = new Date().getFullYear() - negocio.desde;
const i = (n: number) => ({ "--i": n } as CSSProperties);
// Fotos de la tarjeta de carrusel: reales del cliente donde hay; el resto son provisionales bajadas de aceroslym.com (reemplazar).
const foto = { "Láminas y placas": ["lamina-galvanizada", "center"], "Perfiles tubulares": ["ptr-tubular", "center"], "Sólidos": ["catalogo/solidos", "30% center"], "Lámina perforada": ["catalogo/lamina-perforada", "15% center"], "Anclaje": ["catalogo/anclaje", "12% center"], "Ferretería": ["catalogo/ferreteria", "20% center"], "Herramienta eléctrica": ["catalogo/herramienta", "10% center"], "Forja y figuras de vaciado": ["catalogo/forja", "15% center"] } as Record<string, [string, string]>;
const tarjetas: { titulo: string; texto: string; origen: Origen; href: string; foto: string; pos?: string }[] = [
  ...masMateriales.filter((m) => m.activo).map((m) => ({ titulo: m.titulo, texto: m.texto, origen: m.origen, href: m.enlace.href, foto: foto[m.titulo]?.[0] ?? "catalogo/solidos", pos: foto[m.titulo]?.[1] })),
  { titulo: "Celosías y paneles decorativos", texto: "Diseños cortados con plasma CNC a tu medida.", origen: "transformacion", href: catalogo.plasma, foto: "transformacion-2", pos: "center" },
];
const fotosServ = [{ foto: "transformacion-1", pos: "center 40%" }, { foto: "catalogo/srv-doblez", pos: "center" }, { foto: "transformacion-3", pos: "center" }, { foto: "catalogo/srv-asesoria", pos: "center" }];
const cinta = Array.from(new Set(productosActivos.map((p) => p.corto.replace(/ \(.*\)/, ""))));

export default function Home() {
  return (
    <>
      <Header logo={<Logo />} />
      <main id="contenido">
        {/* Portada: tarjeta de título */}
        <section className="hero" aria-labelledby="h-portada">
          <div className="hero__fondo"><Foto nombre="portada-fachada" alt="Fachada de Acero'S LyM en el Libramiento de Tepic" ratio="16 / 9" fondo prioridad posicion="center 40%" /></div>
          <div className="hero__velo" />
          <div className="hero__grano" aria-hidden="true" />
          <div className="barra barra--sup" aria-hidden="true" />
          <div className="barra barra--inf" aria-hidden="true" />
          <div className="wrap hero__in">
            <p className="rotulo entra" style={i(0)}>Acero para tu obra, a tu medida</p>
            <h1 id="h-portada">
              <span className="m"><span style={i(0)}><span className="acento">Lámina,</span> montén</span></span>
              <span className="m"><span style={i(1)}>y PTR</span></span>
              <span className="m"><span style={i(2)} className="acento">en Tepic, Nayarit</span></span>
            </h1>
            <p className="hero__sub entra" style={i(4)}>Material estructural para obra, herrería e industria. Te asesoramos con el producto a la vista y entregamos en todo Nayarit.</p>
            <div className="acciones entra" style={i(5)}>
              <BotonWhatsApp origen="portada">Cotizar por WhatsApp</BotonWhatsApp>
              <a className="btn btn--linea" href={`tel:${negocio.telefonos[0].tel}`}><IconoLlamar /><span>Llamar</span></a>
            </div>
            <div className="hero__dato entra" style={i(6)}><span>Desde {negocio.desde}</span><span>Entrega en todo Nayarit</span><span>Sin mínimo de compra</span></div>
          </div>
        </section>

        {/* Cinta de materiales */}
        <div className="cinta" aria-hidden="true">
          <div className="cinta__pista">
            {[0, 1].flatMap((k) => cinta.map((c) => <span key={`${k}${c}`}>{c}</span>))}
          </div>
        </div>
        <h2 className="sr-only">Materiales: {cinta.join(", ")}</h2>

        {/* Cotizador: texto y pasos a un lado, formulario al otro */}
        <section className="sec sec--papel" id="cotizador" aria-labelledby="h-cot">
          <div className="wrap cot-sec">
            <div className="cot__izq">
              <Reveal><p className="rotulo">Cotizador</p><h2 id="h-cot" style={{ color: "var(--azul)" }}>Cotiza en <span className="hl">un minuto</span>.</h2><p className="lead">Elige el material y arma tu mensaje. Te respondemos por WhatsApp con precio y disponibilidad.</p></Reveal>
              <div className="pasos" aria-label="Cómo cotizar">
                {pasos.map((p, k) => (
                  <Reveal key={p.titulo} as="article" i={k}><h3>{p.titulo}</h3><p>{p.texto}</p></Reveal>
                ))}
              </div>
            </div>
            <Reveal i={1}><Cotizador /></Reveal>
          </div>
        </section>

        <div id="productos" />
        <Capitulo id="lamina-galvanizada" rotulo="Producto estrella" titulo={<>Lámina <span className="hl">galvanizada</span></>} tituloId="h-gal" foto="lamina-galvanizada" alt="Lámina galvanizada en racks etiquetados de Acero'S LyM" grafico={<GraficoLamina />}>
          <p className="lead">Lisa y acanalada, resistente y versátil para techado y revestimientos. Dinos medida, calibre y cantidad.</p>
          <ul className="chips"><li>Lisa</li><li>Acanalada R-101</li><li>Distintos calibres</li></ul>
          <div className="acciones"><BotonWhatsApp origen="lamina-galvanizada">Cotizar lámina galvanizada</BotonWhatsApp></div>
          <div className="enlaces"><a className="enlace" href={catalogo.laminasRecubiertas}>Ver láminas recubiertas</a></div>
        </Capitulo>

        <Capitulo id="lamina-techo" papel der rotulo="Techos" titulo={<>Lámina para <span className="hl">techo</span></>} tituloId="h-techo" foto="lamina-techo" alt="Lámina teja roja y blanca en los racks de Acero'S LyM" grafico={<GraficoTecho />}>
          <p className="lead">Lámina teja, acanalada R-101 y translúcida para techos residenciales, comerciales e industriales.</p>
          <p className="nota-venta">Aislante térmico sobre pedido: colchonetas de fibra tipo MBI (Metal Building Insulation) de Owens Corning.</p>
          <div className="acciones">
            <BotonWhatsApp origen="lamina-techo">Cotizar lámina para techo</BotonWhatsApp>
            <BotonWhatsApp origen="aislante" variante="linea">Preguntar por aislante</BotonWhatsApp>
          </div>
          <div className="enlaces"><a className="enlace" href={catalogo.laminaTeja}>Ver lámina teja</a><a className="enlace" href={catalogo.laminaTranslucida}>Ver lámina translúcida</a></div>
        </Capitulo>

        <Capitulo id="ptr-tubular" rotulo="Estructura" titulo={<><span className="hl">PTR</span>, tubular, montén y sólidos</>} tituloId="h-ptr" foto="ptr-tubular" ratio="4 / 3" alt="Racks de PTR, tubular y montén en Acero'S LyM" grafico={<GraficoPTR />}>
          <p className="lead">Perfiles para estructuras ligeras e industriales. Dinos medida y largo.</p>
          <TablaMedidas tabla={tablaPTR} />
          <div className="acciones"><BotonWhatsApp origen="ptr-tubular">Cotizar PTR, tubular o montén</BotonWhatsApp></div>
          <div className="enlaces"><a className="enlace" href={catalogo.ptrTuboMonten}>Ver PTR, tubo y montén</a><a className="enlace" href={catalogo.perfilesTubulares}>Ver perfiles tubulares</a><a className="enlace" href={catalogo.solidos}>Ver sólidos</a></div>
        </Capitulo>

        {/* Más materiales: carrusel */}
        <section className="sec sec--papel sec--carr" id="materiales" aria-labelledby="h-mat">
          <div className="wrap">
            <Reveal><p className="rotulo">Más materiales</p><h2 id="h-mat" style={{ color: "var(--azul)" }}>Todo para tu obra, en <span className="hl">un solo lugar</span>.</h2></Reveal>
          </div>
          <Carrusel etiqueta="Más materiales">
            {tarjetas.map((t) => (
              <li key={t.titulo}>
                <article className="tarj">
                  <Foto nombre={t.foto} alt={t.titulo} ratio="3 / 4" fondo posicion={t.pos ?? "20% center"} sizes="340px" />
                  <div className="tarj__in">
                    <h3>{t.titulo}</h3>
                    <p>{t.texto}</p>
                    <div className="tarj__bt">
                      <a href={waLink(t.origen)} target="_blank" rel="noopener noreferrer" data-origen={t.origen}>Cotizar</a>
                      <a href={t.href}>Ver catálogo</a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </Carrusel>
        </section>

        {/* Servicios */}
        <section className="sec" id="transformacion" aria-labelledby="h-tra">
          <div className="wrap">
            <Reveal><p className="rotulo">Servicios</p><h2 id="h-tra" style={{ color: "var(--azul)" }}>Lo cortamos, lo doblamos, lo dejamos <span className="hl">a tu medida</span>.</h2></Reveal>
            <div className="servs">
              {servicios.map((s, k) => (
                <Reveal key={s.titulo} as="article" i={k} className="serv-c">
                  <Foto nombre={fotosServ[k].foto} alt={s.titulo} ratio="4 / 3" posicion={fotosServ[k].pos} sizes="(min-width: 1100px) 25vw, (min-width: 700px) 50vw, 100vw" />
                  <div className="serv-c__t"><h3>{s.titulo}</h3><p>{s.texto}</p><a className="enlace" href={s.enlace.href}>{s.enlace.texto}</a></div>
                </Reveal>
              ))}
            </div>
            <Reveal><div className="acciones"><BotonWhatsApp origen="transformacion">Cotizar corte o doblez</BotonWhatsApp></div></Reveal>
          </div>
        </section>

        {/* Entrega */}
        <section className="sec sec--papel" id="entrega" aria-labelledby="h-ent">
          <div className="wrap entrega">
            <Reveal>
              <p className="rotulo">Entrega y retiro</p>
              <h2 id="h-ent" className="destacado">Entrega en todo <span className="hl">Nayarit</span></h2>
              <p className="lead">{negocio.entrega.texto}</p>
              <ul>
                <li>{negocio.entrega.sinMinimo}</li>
                <li>También puedes pasar a recoger en {negocio.direccion.calle}, {negocio.direccion.ciudad}.</li>
                <li>Cobertura: {negocio.zona.principal.join(", ")} y más.</li>
                {constructores.activo && <li>{constructores.texto}</li>}
              </ul>
              <div className="acciones"><BotonWhatsApp origen="entrega">Preguntar si entregan en mi zona</BotonWhatsApp></div>
            </Reveal>
            <Reveal i={1}><MapaNayarit /></Reveal>
          </div>
        </section>

        {/* Nosotros */}
        <section className="sec claro" id="nosotros" aria-labelledby="h-nos">
          <div className="wrap">
            <div className="nos">
              <Reveal>
                <p className="rotulo">Nosotros</p>
                <h2 id="h-nos">Desde <span className="hl">{negocio.desde}</span>, acero para quien construye</h2>
                <p className="lead">Abrimos en {negocio.desde} y atendemos a herreros, constructores y familias de Tepic y todo Nayarit, con atención personalizada y servicio rápido.</p>
                <ul className="valores">{valores.map((v) => <li key={v}>{v}</li>)}</ul>
                <div className="enlaces"><a className="enlace" href={catalogo.nosotros}>Conoce nuestra historia</a></div>
              </Reveal>
              <Reveal i={1}><Foto nombre="nosotros" alt="Instalaciones de Acero'S LyM en Tepic" ratio="4 / 5" sizes="(min-width: 900px) 40vw, 100vw" /></Reveal>
            </div>
            <div className="cifras">
              <Reveal className="cifra"><strong><CountUp to={anios} />+</strong><span>años en Tepic</span></Reveal>
              <Reveal i={1} className="cifra"><strong><CountUp to={12} /></strong><span>líneas de producto</span></Reveal>
              <Reveal i={2} className="cifra"><strong><CountUp to={4} /></strong><span>servicios a medida</span></Reveal>
              <Reveal i={3} className="cifra"><strong><CountUp to={Number(negocio.calificacion.valor)} decimals={1} /></strong><span>en Google · {negocio.calificacion.opiniones} opiniones</span></Reveal>
            </div>
          </div>
        </section>

        {/* Reseñas */}
        <section className="sec sec--azul" id="resenas" aria-labelledby="h-res">
          <div className="wrap">
            <Reveal>
              <p className="rotulo">Reseñas de Google</p>
              <h2 id="h-res">Lo que dicen nuestros <span className="hl">clientes</span></h2>
              <div className="rating"><strong><CountUp to={Number(negocio.calificacion.valor)} decimals={1} /></strong><Estrellas n={5} /><span><CountUp to={negocio.calificacion.opiniones} /> opiniones en Google</span></div>
            </Reveal>
            <div className="resenas">
              {resenas.map((r, k) => (
                <Reveal key={r.nombre} as="article" i={k} className="resena">
                  <Estrellas n={r.estrellas} /><p>{r.texto}</p>
                  <footer><b>{r.nombre}</b>{r.localGuide ? " · Local Guide" : ""} · {r.cuando}</footer>
                </Reveal>
              ))}
            </div>
            <Reveal><div className="acciones"><a className="btn btn--linea" href={negocio.fichaGoogle} target="_blank" rel="noopener noreferrer">Ver todas en Google</a></div></Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="preguntas" aria-labelledby="h-faq">
          <div className="wrap">
            <Reveal><p className="rotulo">Preguntas frecuentes</p><h2 id="h-faq" style={{ color: "var(--azul)" }}>Lo que más nos preguntan</h2></Reveal>
            <Faq items={faq} />
          </div>
        </section>

        {/* Ubicación */}
        <section className="sec sec--papel" id="ubicacion" aria-labelledby="h-ubi">
          <div className="wrap ubi">
            <Reveal>
              <p className="rotulo">Ubicación y horario</p>
              <h2 id="h-ubi" style={{ color: "var(--azul)" }}>Visítanos en <span className="hl">Tepic</span></h2>
              <dl>
                <div><dt>Dirección</dt><dd>{direccionTexto}</dd></div>
                <div><dt>Horario</dt><dd>{negocio.horario.map((h) => (<span key={h.dias} style={{ display: "block" }}>{h.dias}: {h.horas}</span>))}<span className="suave" style={{ display: "block", fontSize: 15 }}>{negocio.horarioNota}</span></dd></div>
                <div><dt>Oficina (llamadas)</dt><dd>{negocio.telefonos.map((t) => (<a key={t.tel} href={`tel:${t.tel}`} style={{ marginRight: 16 }}>{t.etiqueta}</a>))}</dd></div>
                <div><dt>WhatsApp y ventas</dt><dd>{negocio.whatsapp.etiqueta}</dd></div>
              </dl>
              <div className="acciones"><a className="btn btn--linea" href={comoLlegar} target="_blank" rel="noopener noreferrer">Cómo llegar</a><BotonWhatsApp origen="cierre">WhatsApp</BotonWhatsApp></div>
            </Reveal>
            <Reveal i={1}><iframe className="mapa" title="Mapa de Acero'S LyM en Tepic" src={mapaSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Reveal>
          </div>
        </section>

        {/* Cierre */}
        <section className="sec sec--oscuro cierre" aria-labelledby="h-cie">
          <div className="cierre-foto" aria-hidden="true"><Foto nombre="entrega" alt="" ratio="16 / 9" fondo posicion="center 60%" /></div>
          <div className="wrap">
            <Reveal><p className="rotulo">Cotiza</p><h2 id="h-cie">¿Qué material <span className="hl">necesitas</span>?</h2><p className="lead">Cuéntanos medida, calibre y cantidad.</p><div className="acciones"><BotonWhatsApp origen="cierre">Cotizar por WhatsApp</BotonWhatsApp><a className="btn btn--linea" href={`tel:${negocio.telefonos[0].tel}`}><IconoLlamar /><span>Llamar</span></a></div></Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
    </>
  );
}
