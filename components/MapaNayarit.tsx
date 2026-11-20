import type { CSSProperties } from "react";
import { mapaNayarit as m } from "@/content/mapa-nayarit";

const ETIQUETAS = new Set(["Tepic", "Acaponeta", "Santiago Ixcuintla", "San Blas", "Bahía de Banderas", "Ixtlán del Río", "Compostela", "Del Nayar", "La Yesca", "Tecuala"]);

/** Mapa de Nayarit (SVG prerenderizado con d3-geo): rutas animadas desde Tepic hacia las cabeceras municipales. Sin JavaScript en el cliente. */
export default function MapaNayarit() {
  const hub = m.puntos.find((p) => "c" in p)!;
  const destinos = m.puntos.filter((p) => !("c" in p));
  const ruta = (x: number, y: number) => {
    const mx = (hub.x + x) / 2, my = (hub.y + y) / 2;
    const dx = x - hub.x, dy = y - hub.y, len = Math.hypot(dx, dy) || 1;
    const k = Math.min(60, len * 0.22);
    return `M${hub.x} ${hub.y} Q${(mx - (dy / len) * k).toFixed(1)} ${(my + (dx / len) * k).toFixed(1)} ${x} ${y}`;
  };
  return (
    <figure className="mapa-nay">
      <svg viewBox={`0 0 ${m.w} ${m.h}`} role="img" aria-label="Mapa de Nayarit con rutas de entrega desde Tepic hacia los municipios del estado">
        <g className="mapa-nay__mun">{m.municipios.map((mu) => <path key={mu.n} d={mu.d} />)}</g>
        <g className="mapa-nay__rutas" fill="none">
          {destinos.map((p) => <path key={p.n} d={ruta(p.x, p.y)} />)}
        </g>
        {destinos.map((p, i) => {
          const d = ruta(p.x, p.y);
          const st = { "--t": `${(i * 0.62).toFixed(2)}s` } as CSSProperties;
          return (
            <g key={p.n} style={st} className="mapa-nay__dest">
              <circle className="mapa-nay__pulso" cx={p.x} cy={p.y} r="5" />
              <circle className="mapa-nay__punto" cx={p.x} cy={p.y} r="4.2" />
              <circle className="mapa-nay__camion" r="4" style={{ offsetPath: `path("${d}")` }} />
              {ETIQUETAS.has(p.n) && <text x={p.x + (p.x > m.w * 0.55 ? -10 : 10)} y={p.y + 4} textAnchor={p.x > m.w * 0.55 ? "end" : "start"}>{p.n}</text>}
            </g>
          );
        })}
        <g className="mapa-nay__hub">
          <circle className="mapa-nay__onda" cx={hub.x} cy={hub.y} r="8" />
          <circle cx={hub.x} cy={hub.y} r="8" fill="var(--rojo)" stroke="#fff" strokeWidth="2.5" />
          <text x={hub.x + 16} y={hub.y + 5} textAnchor="start">Tepic · sucursal</text>
        </g>
      </svg>
      <figcaption>Entregamos en todo Nayarit. Puntos: cabeceras municipales. El costo de flete depende de la zona.</figcaption>
    </figure>
  );
}
