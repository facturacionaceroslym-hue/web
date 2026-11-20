"use client";
import { useMemo, useState } from "react";
import { productosActivos } from "@/content/productos";
import { negocio } from "@/content/negocio";
import { IconoWA } from "@/lib/iconos";

export default function Cotizador() {
  const [producto, setProducto] = useState("");
  const [medida, setMedida] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [modo, setModo] = useState<"entrega" | "retiro">("entrega");
  const [ciudad, setCiudad] = useState("");

  const mensaje = useMemo(() => {
    const p = productosActivos.find((x) => x.id === producto)?.corto;
    const partes = [p, medida.trim() && `medida o calibre: ${medida.trim()}`, cantidad.trim() && `cantidad: ${cantidad.trim()}`].filter(Boolean) as string[];
    const entrega = modo === "retiro" ? "retiro en sucursal" : ciudad.trim() ? `entrega en ${ciudad.trim()}` : "entrega a domicilio";
    return partes.length ? `Hola, vi su página web y quiero cotizar: ${partes.join(", ")}, ${entrega}.` : "Hola, vi su página web y quiero cotizar.";
  }, [producto, medida, cantidad, modo, ciudad]);

  const href = `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="cot">
      <form className="cot__form" onSubmit={(e) => e.preventDefault()} aria-label="Arma tu cotización">
        <div className="campo">
          <label htmlFor="c-prod">Material</label>
          <select id="c-prod" value={producto} onChange={(e) => setProducto(e.target.value)}>
            <option value="">Elige un material</option>
            {productosActivos.map((p) => (<option key={p.id} value={p.id}>{p.nombre}</option>))}
          </select>
        </div>
        <div className="fila2">
          <div className="campo"><label htmlFor="c-med">Medida o calibre</label><input id="c-med" value={medida} onChange={(e) => setMedida(e.target.value)} placeholder="Ej. calibre 26, 3 m" autoComplete="off" /></div>
          <div className="campo"><label htmlFor="c-can">Cantidad</label><input id="c-can" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Ej. 10 piezas" autoComplete="off" /></div>
        </div>
        <fieldset style={{ border: 0, padding: 0, margin: 0 }} className="campo">
          <legend style={{ fontFamily: "var(--titulo)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--azul)", marginBottom: 6, padding: 0 }}>Entrega o retiro</legend>
          <div className="seg">
            <label><input type="radio" name="modo" checked={modo === "entrega"} onChange={() => setModo("entrega")} />Entrega</label>
            <label><input type="radio" name="modo" checked={modo === "retiro"} onChange={() => setModo("retiro")} />Retiro en sucursal</label>
          </div>
        </fieldset>
        {modo === "entrega" && (
          <div className="campo"><label htmlFor="c-ciu">Ciudad o colonia</label><input id="c-ciu" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ej. Xalisco" autoComplete="off" /></div>
        )}
      </form>
      <div className="cot__vista" aria-live="polite">
        <div>
          <small>Tu mensaje</small>
          <p className="burbuja" key={mensaje}>{mensaje}</p>
        </div>
        <div>
          <a className="btn btn--wa" href={href} target="_blank" rel="noopener noreferrer" data-origen="cotizador"><IconoWA /><span>Enviar por WhatsApp</span></a>
          <p className="cot__nota" style={{ marginTop: 14 }}>¿Tienes una lista o un plano? Mándanos una foto por WhatsApp.</p>
          <p className="cot__nota" style={{ marginTop: 8 }}>El precio depende del calibre, la medida y la cantidad; por eso cotizamos contigo.</p>
        </div>
      </div>
    </div>
  );
}
