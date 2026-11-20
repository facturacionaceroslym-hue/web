// Un texto natural y distinto por origen: sirve como medida aproximada de qué sección convierte (sin analítica).
export const origenes = {
  cabecera: "Hola, vi su página web y quiero cotizar.",
  portada: "Hola, vi su página web y quiero cotizar material.",
  cotizador: "Hola, vi su página web y quiero cotizar.",
  "lamina-galvanizada": "Hola, vi su página web y quiero cotizar lámina galvanizada.",
  "lamina-techo": "Hola, vi su página web y quiero cotizar lámina para techo.",
  aislante: "Hola, vi su página web y quiero preguntar por aislante térmico para techo.",
  "ptr-tubular": "Hola, vi su página web y quiero cotizar PTR, tubular o montén.",
  "otros-materiales": "Hola, vi su página web y quiero cotizar otros materiales.",
  herramienta: "Hola, vi su página web y quiero información de herramienta eléctrica.",
  forja: "Hola, vi su página web y quiero información de forja y figuras de vaciado.",
  transformacion: "Hola, vi su página web y quiero cotizar corte o doblez.",
  entrega: "Hola, vi su página web y quiero saber si entregan en mi zona.",
  resenas: "Hola, vi sus reseñas en la página y quiero cotizar.",
  cierre: "Hola, vi su página web y quiero una cotización.",
  "no-encontrada": "Hola, entré a su página web y quiero cotizar.",
  error: "Hola, tuve un problema en su página web y quiero cotizar.",
  antifraude: "Hola, vi el aviso de seguridad en su página y quiero confirmar un contacto.",
} as const;

export type Origen = keyof typeof origenes;
