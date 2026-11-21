// Fuente de verdad: formulario del cliente (Expediente, nota 01 de Obsidian).
export const negocio = {
  nombre: "Acero'S LyM Nayarit",
  nombreCorto: "Acero'S LyM",
  lema: "Lámina y Montén",
  desde: 2002,
  direccion: {
    calle: "Perif. Libramiento #482",
    colonia: "Col. El Armadillo",
    cp: "63792",
    ciudad: "Tepic",
    estado: "Nayarit",
  },
  // Pin de Google Maps confirmado por Lups (21-nov-2026). Con «Nuevas Palomas» Maps no ubicaba bien; la colonia correcta es El Armadillo.
  coordenadas: { lat: 21.4661562, lng: -104.856865 },
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
  fichaGoogle:
    "https://www.google.com/maps/place/Perif.+Libramiento+482,+El+Armadillo,+63792+Tepic,+Nay./@21.4661562,-104.8594399,17z/data=!3m1!4b1!4m6!3m5!1s0x842730adf7157917:0xe458bb2c61aa807!8m2!3d21.4661562!4d-104.856865",
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
