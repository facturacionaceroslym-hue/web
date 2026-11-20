import { negocio, direccionTexto } from "./negocio";

export const faq = [
  { q: "¿Cómo cotizo?", a: "Por WhatsApp: elige tu material en el cotizador o escríbenos con medida, calibre y cantidad. También puedes llamar." },
  { q: "¿Por qué no hay precios en la página?", a: "Porque dependen del calibre, la medida y la cantidad. Cotizamos contigo para darte el precio correcto." },
  { q: "¿Entregan a domicilio?", a: `Sí, en todo Nayarit, con costo de flete. En Tepic, Xalisco y alrededores no se cobra flete en compras mayores a $${negocio.entrega.umbralSinFlete.toLocaleString("es-MX")}, a pie de banqueta. También puedes recoger en ${negocio.direccion.calle}, ${negocio.direccion.ciudad}.` },
  { q: "¿Hay mínimo de compra?", a: "No. Puedes pedir desde una pieza; el envío tiene costo." },
  { q: "¿Cortan o doblan lámina a la medida?", a: "Sí: corte plasma CNC, corte y doblez de lámina lisa y acanalado a medida." },
  { q: "¿Qué calibre de lámina necesito?", a: "A mayor número de calibre, más delgada es la lámina. La elección depende del claro, el uso y la carga; te asesoramos al cotizar." },
  { q: "¿Manejan aislante térmico para techos?", a: "Sí, sobre pedido: colchonetas de fibra tipo MBI (Metal Building Insulation) de Owens Corning, para techos estructurales metálicos." },
  { q: "¿Venden herramienta eléctrica?", a: "Sí, la que requiere el ramo de la herrería; la mayoría con un año de garantía." },
  { q: "¿Puedo ver el material antes de comprar?", a: "Sí. Te asesoramos con el producto a la vista en la sucursal." },
  { q: "¿Qué horario tienen?", a: "Lunes a viernes de 8:30 a.m. a 5:30 p.m., sábado de 8:30 a.m. a 1:30 p.m. Domingo cerrado y días festivos oficiales." },
  { q: "¿Dónde están?", a: direccionTexto + "." },
];
