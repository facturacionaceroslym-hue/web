import fs from "node:fs";
import path from "node:path";
import { negocio } from "@/content/negocio";

/** Usa public/img/logo/logo-horizontal.(svg|png) si existe; si no, texto provisional (el release-check lo detecta). */
export default function Logo({ negativo = false }: { negativo?: boolean }) {
  const dir = path.join(process.cwd(), "public", "img");
  const base = negativo ? "logo-negativo" : "logo-horizontal";
  const ext = ["svg", "png", "webp"].find((e) => fs.existsSync(path.join(dir, "logo", `${base}.${e}`)));
  return (
    <a className={`logo${negativo ? " logo--neg" : ""}`} href="/" aria-label={`${negocio.nombre}, inicio`}>
      {ext ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/img/logo/${base}.${ext}`} alt={negocio.nombre} height={42} />
      ) : (
        <>
          <b data-logo-provisional>ACERO&apos;S LyM</b>
          <span>{negocio.lema}</span>
        </>
      )}
    </a>
  );
}
