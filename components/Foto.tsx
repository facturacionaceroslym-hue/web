import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXT = ["webp", "jpg", "jpeg", "png"];

/**
 * Busca public/img/fotos/<nombre>.<ext> (o public/img/<carpeta>/<nombre> si el nombre lleva carpeta, p. ej. «catalogo/solidos»). Sin archivo muestra un marco reservado (el release-check bloquea publicar así).
 * `fondo`: ocupa todo el contenedor. `posicion`: punto focal (object-position) para recortes distintos en móvil y escritorio.
 */
export default function Foto({ nombre, alt, ratio = "4 / 5", prioridad = false, sizes = "(min-width: 900px) 50vw, 100vw", fondo = false, posicion = "center" }: { nombre: string; alt: string; ratio?: string; prioridad?: boolean; sizes?: string; fondo?: boolean; posicion?: string }) {
  const dir = path.join(process.cwd(), "public", "img");
  const ruta = nombre.includes("/") ? nombre : `fotos/${nombre}`;
  const ext = EXT.find((e) => fs.existsSync(path.join(dir, `${ruta}.${e}`)));
  const style = { "--r": ratio } as React.CSSProperties;
  const clase = `foto${fondo ? " foto--fondo" : ""}`;
  if (!ext) {
    return (
      <div className={`${clase} foto--pend`} style={style} data-foto-pendiente={nombre}>
        <span>FOTO PENDIENTE<br />{nombre}</span>
      </div>
    );
  }
  return (
    <div className={clase} style={style}>
      <Image src={`/img/${ruta}.${ext}`} alt={alt} fill sizes={fondo ? "100vw" : sizes} priority={prioridad} style={{ objectPosition: posicion }} />
    </div>
  );
}
