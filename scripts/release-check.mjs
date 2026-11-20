// Puerta de publicación (Fase 4). Falla si queda algo provisional. Uso: npm run release-check
import fs from "node:fs"; import path from "node:path";
const root = process.cwd(); const errs = [];
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const exists = (p) => fs.existsSync(path.join(root, p));
const walk = (d) => fs.readdirSync(path.join(root, d), { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

// 1 Fotos
const src = ["app/page.tsx", ...walk("components").filter((f) => f.endsWith(".tsx"))].map(read).join("\n");
for (const m of src.matchAll(/nombre="([a-z0-9-]+)"/g)) {
  if (!["webp","jpg","jpeg","png"].some((e) => exists(`public/img/${m[1]}.${e}`))) errs.push(`Falta la foto public/img/${m[1]}.(webp|jpg|png)`);
}
// 2 Logo
if (!["svg","png","webp"].some((e) => exists(`public/img/logo-horizontal.${e}`))) errs.push("Falta public/img/logo-horizontal.(svg|png)");
if (!["svg","png","webp"].some((e) => exists(`public/img/logo-negativo.${e}`))) errs.push("Falta public/img/logo-negativo.(svg|png)");
// 3 Fuentes con licencia (woff2 de licencia web) + confirmación explícita
for (const f of ["cocogoose-pro-regular.woff2", "coolvetica-regular.woff2"]) if (!exists(`public/fonts/${f}`)) errs.push(`Falta public/fonts/${f} (licencia web de la fuente)`);
if (process.env.LICENCIA_FUENTES_CONFIRMADA !== "1") errs.push("Falta confirmar licencias de fuentes: ejecuta con LICENCIA_FUENTES_CONFIRMADA=1 solo con comprobante de compra de ambas.");
// 4 Legal
if (/BORRADOR_LEGAL\s*=\s*true/.test(read("content/legal.ts"))) errs.push("Textos legales aún son borrador (content/legal.ts).");
// 5 Tablas
if (read("content/tablas.ts").includes("filas: []")) console.warn("Aviso: la tabla de PTR está vacía (se omite en la web).");
// 6 Dominio
if (!process.env.NEXT_PUBLIC_SITE_URL) console.warn("Aviso: NEXT_PUBLIC_SITE_URL no definido; se usa https://aceroslym.com.");
if (errs.length) { console.error("\nNO LISTO PARA PUBLICAR:\n- " + errs.join("\n- ")); process.exit(1); }
console.log("Release-check OK.");
