// Enlaces a las páginas de producto y servicio del sitio actual del cliente (decisión de Lups 20-nov).
// Base configurable: si la web nueva vive en el mismo dominio y el WordPress sigue atendiendo /productos y /servicios, usar "" (rutas relativas).
const BASE = (process.env.NEXT_PUBLIC_CATALOGO_URL ?? "https://aceroslym.com").replace(/\/$/, "");
const u = (p: string) => `${BASE}${p}`;

export const catalogo = {
  laminasRecubiertas: u("/productos/laminas-recubiertas/"),
  laminasPlacas: u("/productos/lamina-negra/"),
  ptrTuboMonten: u("/productos/ptr-tubo-y-monten/"),
  laminaTeja: u("/productos/lamina-teja/"),
  perfilesTubulares: u("/productos/perfiles-tubulares/"),
  solidos: u("/productos/solidos/"),
  maquinas: u("/productos/maquinas-electricas-potencia-y-precision-para-tus-proyectos/"),
  forja: u("/productos/forja-donde-el-metal-se-convierte-en-arte-y-robustez/"),
  laminaPerforada: u("/productos/lamina-perforada/"),
  laminaTranslucida: u("/productos/lamina-traslucida/"),
  ferreteria: u("/productos/ferreteria-en-general/"),
  anclajes: u("/productos/anclajes/"),
  acanalado: u("/servicios/acanalado-a-medida-lamina-personalizada-para-tu-proyecto/"),
  corteDoblez: u("/servicios/corte-y-dobles-de-lamina-lisa/"),
  plasma: u("/servicios/corte-con-plasma-cnc-precision-milimetrica-para-tus-proyectos/"),
  // Slug provisional del sitio actual (aparece como «segundo-servicio»): conviene que el cliente lo corrija en su WordPress.
  asesoria: u("/servicios/segundo-servicio/"),
  materialesEstructuras: u("/servicios/venta-de-materiales-para-estructuras-metalicas/"),
  productos: u("/productos/"),
  servicios: u("/servicios/"),
  nosotros: u("/nosotros/"),
};
