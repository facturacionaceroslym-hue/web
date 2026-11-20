import type { Origen } from "./whatsapp";
import { catalogo } from "./catalogo";

export type Producto = { id: string; corto: string; nombre: string; cotizable: boolean; activo: boolean };

// Catálogo aprobado + respuestas del cliente 6-nov. Sin precios.
export const productos: Producto[] = [
  { id: "lamina-galvanizada", corto: "lámina galvanizada", nombre: "Lámina galvanizada", cotizable: true, activo: true },
  { id: "lamina-techo", corto: "lámina para techo", nombre: "Lámina para techo (R-101, teja, translúcida)", cotizable: true, activo: true },
  { id: "aislante", corto: "aislante térmico (sobre pedido)", nombre: "Aislante térmico (sobre pedido)", cotizable: true, activo: true },
  { id: "ptr-tubular", corto: "PTR, tubular, montén o sólidos", nombre: "PTR, tubular, montén o sólidos", cotizable: true, activo: true },
  { id: "laminas-placas", corto: "láminas y placas", nombre: "Láminas y placas (lámina negra)", cotizable: true, activo: true },
  { id: "lamina-perforada", corto: "lámina perforada", nombre: "Lámina perforada", cotizable: true, activo: true },
  { id: "anclaje", corto: "anclaje", nombre: "Anclaje", cotizable: true, activo: true },
  { id: "ferreteria", corto: "ferretería", nombre: "Ferretería, tornillería, soldaduras, siliconas y EPP", cotizable: true, activo: true },
  { id: "herramienta", corto: "herramienta eléctrica para herrería", nombre: "Herramienta eléctrica para herrería", cotizable: true, activo: true },
  { id: "forja", corto: "forja y figuras de vaciado", nombre: "Forja y figuras de vaciado (ornamental)", cotizable: true, activo: true },
  { id: "corte-doblez", corto: "corte y doblez de lámina", nombre: "Corte y doblez de lámina", cotizable: true, activo: true },
  { id: "corte-plasma", corto: "corte plasma CNC", nombre: "Corte plasma CNC", cotizable: true, activo: true },
  { id: "acanalado", corto: "acanalado a medida", nombre: "Acanalado a medida", cotizable: true, activo: true },
  { id: "asesoria", corto: "asesoría técnica", nombre: "Asesoría técnica", cotizable: true, activo: true },
];
export const productosActivos = productos.filter((p) => p.activo && p.cotizable);

export type Enlace = { texto: string; href: string };
export type Bloque = { titulo: string; texto: string; origen: Origen; enlace: Enlace; activo: boolean };

// Textos basados en las descripciones del propio sitio del cliente (scraping 20-nov) y en sus respuestas del 6-nov.
export const masMateriales: Bloque[] = [
  { titulo: "Láminas y placas", texto: "Láminas y placas en distintas medidas y calibres.", origen: "otros-materiales", enlace: { texto: "Ver láminas y placas", href: catalogo.laminasPlacas }, activo: true },
  { titulo: "Perfiles tubulares", texto: "Perfiles para estructuras metálicas, ventanas, puertas y detalles decorativos.", origen: "ptr-tubular", enlace: { texto: "Ver perfiles tubulares", href: catalogo.perfilesTubulares }, activo: true },
  { titulo: "Sólidos", texto: "Materiales de alta resistencia para uso estructural e industrial.", origen: "ptr-tubular", enlace: { texto: "Ver sólidos", href: catalogo.solidos }, activo: true },
  { titulo: "Lámina perforada", texto: "Perforaciones en distintos patrones y tamaños, en varios espesores.", origen: "otros-materiales", enlace: { texto: "Ver lámina perforada", href: catalogo.laminaPerforada }, activo: true },
  { titulo: "Anclaje", texto: "Anclajes de acero para construcción e industria.", origen: "otros-materiales", enlace: { texto: "Ver anclajes", href: catalogo.anclajes }, activo: true },
  { titulo: "Ferretería", texto: "Tornillería, soldaduras, siliconas y equipo de protección.", origen: "otros-materiales", enlace: { texto: "Ver ferretería", href: catalogo.ferreteria }, activo: true },
  { titulo: "Herramienta eléctrica", texto: "La que requiere el ramo de la herrería; la mayoría con un año de garantía.", origen: "herramienta", enlace: { texto: "Ver herramienta eléctrica", href: catalogo.maquinas }, activo: true },
  { titulo: "Forja y figuras de vaciado", texto: "Ornamentales y de diseño arquitectónico: barandales, portones y protecciones.", origen: "forja", enlace: { texto: "Ver forja", href: catalogo.forja }, activo: true },
];

export const servicios = [
  { titulo: "Corte plasma CNC", texto: "Desde celosías decorativas hasta piezas industriales.", enlace: { texto: "Ver corte plasma CNC", href: catalogo.plasma } },
  { titulo: "Corte y doblez", texto: "Lámina lisa a tu medida: canalones, botaguas, remates y piezas especiales.", enlace: { texto: "Ver corte y doblez", href: catalogo.corteDoblez } },
  { titulo: "Acanalado a medida", texto: "Lámina al largo que pida tu proyecto, para estructuras ligeras y naves industriales.", enlace: { texto: "Ver acanalado a medida", href: catalogo.acanalado } },
  { titulo: "Asesoría técnica", texto: "Te ayudamos a elegir calibre o perfil y a aplicar el material.", enlace: { texto: "Ver asesoría técnica", href: catalogo.asesoria } },
];

export const pasos = [
  { titulo: "Envía tu lista", texto: "Producto, medidas y cantidad. También puedes mandar una foto de tu lista o plano por WhatsApp." },
  { titulo: "Recibe tu cotización", texto: "Te respondemos en horario de atención con precio y disponibilidad." },
  { titulo: "Recoge o recibe", texto: "Pasa por tu material a la tienda o acuerda la entrega en obra." },
];

export const valores = ["Integridad", "Excelencia", "Compromiso", "Innovación"];

// Promoción del sitio actual del cliente. Se publica solo cuando el cliente confirme que sigue vigente.
export const constructores = { activo: false, texto: "¿Eres constructor? Pregunta por el precio especial para constructores en mostrador, al hacer tu pedido." };
