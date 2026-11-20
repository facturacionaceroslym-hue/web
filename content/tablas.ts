// Tablas de medidas y pesos: SOLO con datos que entregue el cliente (ficha de su proveedor).
// No se copian tablas de otros sitios. Mientras esté vacío, la sección no muestra tabla.
export type FilaMedida = { pulgadas: string; mm: string; calibre: string; espesorMm: string; pesoKgM: string };
export type Tabla = { id: string; titulo: string; nota: string; filas: FilaMedida[] };

export const tablaPTR: Tabla = {
  id: "ptr",
  titulo: "PTR — medidas y pesos",
  nota: "Pesos, dimensiones y tolerancias teóricos; pueden variar según el proveedor.",
  filas: [],
};
