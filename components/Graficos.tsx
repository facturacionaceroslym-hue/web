/* Gráficos decorativos que se dibujan solos (SVG + CSS). No son planos técnicos ni llevan medidas: son ilustrativos. */
import type { CSSProperties } from "react";
const L = (len: number, d = 0) => ({ "--len": len, "--d": d } as CSSProperties);

// Perfil trapezoidal repetido (ilustrativo; no representa un modelo exacto)
function onda(x0: number, y0: number, n: number) {
  let d = `M${x0} ${y0}`;
  for (let i = 0; i < n; i++) d += ` l22 0 l14 -34 l30 0 l14 34`;
  d += " l22 0";
  return d;
}

export function GraficoHero() {
  return (
    <svg className="hero__grafico dibuja" viewBox="0 0 560 420" aria-hidden="true" style={{ color: "#fff" }}>
      <rect x="30" y="30" width="150" height="150" rx="10" style={L(700, 0)} />
      <rect x="48" y="48" width="114" height="114" rx="5" style={L(500, 1)} />
      <path d={onda(240, 150, 3)} style={L(900, 2)} />
      <path d={onda(240, 162, 3)} style={L(900, 3)} className="rojo" />
      <path d="M30 300 H530" style={L(600, 4)} />
      <path d="M30 330 H400" style={L(400, 5)} />
      <path d="M30 360 H300" style={L(300, 6)} className="rojo" />
    </svg>
  );
}

export function GraficoTecho() {
  return (
    <svg viewBox="0 0 420 220" className="dibuja" aria-hidden="true">
      <path d={onda(20, 150, 4)} style={L(1100, 0)} />
      <path d={onda(20, 166, 4)} style={L(1100, 1)} className="rojo" />
      <path d="M20 200 H400" style={L(420, 2)} />
    </svg>
  );
}

export function GraficoPTR() {
  return (
    <svg viewBox="0 0 420 260" className="dibuja" aria-hidden="true">
      <rect x="40" y="30" width="180" height="180" rx="12" style={L(800, 0)} />
      <rect x="62" y="52" width="136" height="136" rx="6" style={L(600, 1)} className="rojo" />
      <rect x="250" y="70" width="140" height="100" rx="8" style={L(600, 2)} />
      <rect x="268" y="88" width="104" height="64" rx="4" style={L(450, 3)} className="rojo" />
      <path d="M40 235 H220" style={L(200, 4)} />
    </svg>
  );
}

export function GraficoLamina() {
  return (
    <svg viewBox="0 0 420 240" className="dibuja" aria-hidden="true">
      <path d="M40 170 L150 60 H380 L270 170 Z" style={L(900, 0)} />
      <path d="M62 170 L172 82 H358" style={L(500, 1)} className="rojo" />
      <path d="M40 190 H270" style={L(260, 2)} />
      <path d="M40 206 H200" style={L(180, 3)} />
    </svg>
  );
}

const RUTA = "M60 70 H200 L240 110 V170 H100 L60 130 Z";
export function GraficoPlasma() {
  return (
    <svg viewBox="0 0 420 260" className="dibuja serv__g" aria-hidden="true">
      <path d={RUTA} style={L(700, 0)} />
      {[0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={90 + c * 34} cy={95 + r * 24} r="6" style={L(40, 2 + ((r + c) % 3))} />))}
      <path d="M270 40 H390 V220 H270 Z" style={L(640, 1)} className="rojo" />
      <circle className="chispa" cx="0" cy="0" r="5" fill="#D12A2B" stroke="none" style={{ offsetPath: `path('${RUTA}')`, strokeDasharray: "none", strokeDashoffset: 0, animationDelay: "1s" } as CSSProperties} />
    </svg>
  );
}
