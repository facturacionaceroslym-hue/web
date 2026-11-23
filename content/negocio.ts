// Fuente de verdad: formulario del cliente (Expediente, nota 01 de Obsidian).
export const negocio = {
  nombre: "Acero'S LyM Nayarit",
  nombreCorto: "Acero'S LyM",
  lema: "Lámina y Montén",
  desde: 2002,
  direccion: {
    calle: "Perif. Libramiento #482",
    colonia: "Col. El Armadillo",
    cp: "63194",
    ciudad: "Tepic",
    estado: "Nayarit",
  },
  // Ficha de Google de la empresa (enlace corto confirmado por Lups, 21-nov-2026). `ftid` identifica la ficha: el mapa y «Cómo llegar» deben usarla, no coordenadas sueltas.
  mapa: {
    consulta: "Acero'S L y M, Libramiento 482, El Armadillo, Tepic, Nayarit",
    ftid: "0x842730b3f9782fbb:0x3f624245eae5862",
    enlaceCorto: "https://maps.app.goo.gl/MVEauroyYQVgsLGG6",
  },
  telefonos: [
    { etiqueta: "311 218 38 81", tel: "+523112183881" },
    { etiqueta: "311 219 59 15", tel: "+523112195915" },
  ],
  whatsapp: { etiqueta: "311 264 10 02", numero: "523112641002" },
  correo: "info@aceroslym.com",
  horario: [
    { dias: "Lunes a viernes", horas: "8:30 a.m. – 5:30 p.m." },
    { dias: "Sábado", horas: "8:30 a.m. – 1:30 p.m." },
    { dias: "Domingo", horas: "Cerrado" },
  ],
  horarioNota: "Días festivos oficiales: cerrado.",
  zona: { principal: ["Tepic", "Xalisco", "Samao"], alcance: "todo el estado de Nayarit" },
  redes: {
    facebook: "https://www.facebook.com/aceroslymtepic",
    instagram: "https://www.instagram.com/aceroslym",
  },
  // Enlace a la ficha de Google (reseñas). TODO 2.5: sustituir por el enlace corto oficial de la ficha.
  fichaGoogle: "https://maps.app.goo.gl/MVEauroyYQVgsLGG6",
  calificacion: { valor: "4.5", opiniones: 102 },
  entrega: {
    umbralSinFlete: 2500,
    texto:
      "Entregamos en todo Nayarit con costo de flete. En Tepic, Xalisco y alrededores, sin costo de flete en compras mayores a $2,500, a pie de banqueta.",
    sinMinimo: "Sin mínimo de compra: puedes pedir desde una pieza, con costo de envío.",
  },
  sitioUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aceroslym.com",
  // Firma obligatoria (regla de Lups).
  firma: { texto: "Hecho con amor por allitron.io by somoslazaro.com", url: "https://allitron.io" },
};

export const direccionTexto = `${negocio.direccion.calle}, ${negocio.direccion.colonia}, C.P. ${negocio.direccion.cp}, ${negocio.direccion.ciudad}, ${negocio.direccion.estado}`;
