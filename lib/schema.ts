import { negocio, direccionTexto } from "@/content/negocio";
import { faq } from "@/content/faq";
import { catalogo } from "@/content/catalogo";

// Sin aggregateRating propio: Google no premia reseñas autopublicadas en el sitio y puede verse como marcado engañoso.
export function jsonLd() {
  const dias = (d: string[], a: string, c: string) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: d, opens: a, closes: c });
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${negocio.sitioUrl}/#negocio`,
        name: negocio.nombre,
        url: negocio.sitioUrl,
        telephone: negocio.telefonos.map((t) => t.tel),
        email: negocio.correo,
        description: "Venta de lámina galvanizada, lámina para techo, PTR, tubular, montén y ferretería. Corte plasma CNC, corte y doblez y acanalado a medida.",
        foundingDate: String(negocio.desde),
        address: { "@type": "PostalAddress", streetAddress: `${negocio.direccion.calle}, ${negocio.direccion.colonia}`, postalCode: negocio.direccion.cp, addressLocality: negocio.direccion.ciudad, addressRegion: negocio.direccion.estado, addressCountry: "MX" },
        areaServed: { "@type": "State", name: negocio.direccion.estado },
        openingHoursSpecification: [dias(["Monday","Tuesday","Wednesday","Thursday","Friday"], "08:30", "17:30"), dias(["Saturday"], "08:30", "13:30")],
        sameAs: [negocio.redes.facebook, negocio.redes.instagram],
        hasMap: negocio.fichaGoogle,
        slogan: negocio.lema,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Catálogo de materiales y servicios",
          itemListElement: [
            ["Lámina galvanizada y recubierta", catalogo.laminasRecubiertas],
            ["Lámina teja", catalogo.laminaTeja],
            ["Lámina translúcida", catalogo.laminaTranslucida],
            ["PTR, tubo y montén", catalogo.ptrTuboMonten],
            ["Perfiles tubulares", catalogo.perfilesTubulares],
            ["Sólidos", catalogo.solidos],
            ["Corte con plasma CNC", catalogo.plasma],
            ["Acanalado a medida", catalogo.acanalado],
            ["Corte y doblez de lámina lisa", catalogo.corteDoblez],
          ].map(([name, url]) => ({ "@type": "Offer", url, itemOffered: { "@type": "Product", name } })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
export { direccionTexto };
