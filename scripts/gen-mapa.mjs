// Genera content/mapa-nayarit.ts (SVG ya proyectado) a partir de scripts/data/nayarit-municipios.geojson.
// Uso: node scripts/gen-mapa.mjs   (solo cuando cambien los puntos o la geometría)
// Fuente de la geometría: github.com/angelnmara/geojson (Municipios/18_Nayarit.json). Puntos: cabeceras municipales (coordenadas públicas aproximadas).
import fs from "node:fs";
import { geoMercator, geoPath, geoContains } from "d3-geo";
import simplify from "@turf/simplify";

const W = 600, H = 760;
const gj = JSON.parse(fs.readFileSync(new URL("./data/nayarit-municipios.geojson", import.meta.url), "utf8"));
const simp = { type: "FeatureCollection", features: gj.features.map((f) => simplify(f, { tolerance: 0.0025, highQuality: true })) };
const proy = geoMercator().fitExtent([[14, 14], [W - 14, H - 14]], simp);
const path = geoPath(proy).digits(1);

const municipios = simp.features.map((f) => ({ n: f.properties.NAME_2, d: path(f) }));
const estado = { type: "FeatureCollection", features: simp.features };

// [nombre, lon, lat, centro?]
const P = [
  ["Tepic", -104.8946, 21.5039, true],
  ["Xalisco", -104.9014, 21.4478], ["San Blas", -105.2822, 21.5417], ["Santiago Ixcuintla", -105.2078, 21.8128],
  ["Tuxpan", -105.2992, 21.9544], ["Rosamorada", -105.2086, 22.1239], ["Acaponeta", -105.3592, 22.4917],
  ["Tecuala", -105.4592, 22.4033], ["Ruiz", -105.1394, 21.9453], ["Compostela", -104.9000, 21.2358],
  ["Bahía de Banderas", -105.2333, 20.8000], ["San Pedro Lagunillas", -104.7611, 21.2078],
  ["Ahuacatlán", -104.4856, 21.0539], ["Ixtlán del Río", -104.3667, 21.0333], ["Santa María del Oro", -104.5886, 21.3586],
  ["Amatlán de Cañas", -104.3883, 20.8000], ["Jala", -104.4264, 21.0647], ["La Yesca", -104.0167, 21.3167],
  ["Huajicori", -105.3167, 22.6389], ["Del Nayar", -104.5361, 22.2519],
];
const puntos = [];
for (const [n, lon, lat, c] of P) {
  const dentro = gj.features.some((f) => geoContains(f, [lon, lat]));
  if (!dentro) { console.warn("FUERA del estado, omitido:", n); continue; }
  const [x, y] = proy([lon, lat]);
  puntos.push({ n, x: +x.toFixed(1), y: +y.toFixed(1), ...(c ? { c: true } : {}) });
}
const salida = `// GENERADO por scripts/gen-mapa.mjs — no editar a mano.\nexport const mapaNayarit = ${JSON.stringify({ w: W, h: H, municipios, puntos })} as const;\n`;
fs.writeFileSync(new URL("../content/mapa-nayarit.ts", import.meta.url), salida);
console.log("municipios", municipios.length, "puntos", puntos.length, "bytes", salida.length);
