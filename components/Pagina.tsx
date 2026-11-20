import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import { BORRADOR_LEGAL } from "@/content/legal";

export default function Pagina({ titulo, legal = false, children }: { titulo: string; legal?: boolean; children: React.ReactNode }) {
  return (
    <>
      <Header logo={<Logo />} />
      <main id="contenido" className="pag">
        <div className="wrap">
          {legal && BORRADOR_LEGAL && <p className="borrador">Borrador: este texto requiere revisión humana antes de publicarse. No es asesoría legal.</p>}
          <h1>{titulo}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
