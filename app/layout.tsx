import type { Metadata, Viewport } from "next";
import "./globals.css";
import { negocio } from "@/content/negocio";

export const metadata: Metadata = {
  metadataBase: new URL(negocio.sitioUrl),
  title: { default: "Acero'S LyM Nayarit | Lámina, PTR y montén en Tepic", template: "%s | Acero'S LyM Nayarit" },
  description: "Lámina galvanizada, lámina para techo, PTR, tubular y montén en Tepic. Corte plasma CNC, corte y doblez. Entrega en todo Nayarit. Cotiza por WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_MX", siteName: negocio.nombre, title: "Acero'S LyM Nayarit | Lámina, PTR y montén en Tepic", description: "Lámina, PTR y montén en Tepic. Entrega en todo Nayarit. Cotiza por WhatsApp.", url: "/", images: [{ url: "/img/social/og.jpg", width: 1200, height: 630, alt: "Fachada de Acero'S LyM en Tepic, Nayarit" }] },
  twitter: { card: "summary_large_image", title: "Acero'S LyM Nayarit | Lámina, PTR y montén en Tepic", description: "Lámina, PTR y montén en Tepic. Entrega en todo Nayarit.", images: ["/img/social/og.jpg"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#123365", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className="sin-js" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('sin-js')" }} />
      </head>
      <body>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
