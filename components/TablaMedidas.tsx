import type { Tabla } from "@/content/tablas";

/** Se omite si el cliente aún no entrega datos. */
export default function TablaMedidas({ tabla }: { tabla: Tabla }) {
  if (tabla.filas.length === 0) return null;
  return (
    <details className="tabla-wrap">
      <summary>{tabla.titulo}</summary>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead><tr><th>Medida (pulg)</th><th>Medida (mm)</th><th>Calibre</th><th>Espesor (mm)</th><th>Peso (kg/m)</th></tr></thead>
          <tbody>{tabla.filas.map((f) => (<tr key={f.pulgadas + f.calibre}><td>{f.pulgadas}</td><td>{f.mm}</td><td>{f.calibre}</td><td>{f.espesorMm}</td><td>{f.pesoKgM}</td></tr>))}</tbody>
        </table>
      </div>
      <p className="suave" style={{ fontSize: 14, marginTop: 8 }}>{tabla.nota}</p>
    </details>
  );
}
