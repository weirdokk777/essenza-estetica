import type { SVGProps } from "react";

/**
 * Acento botânico decorativo — ramo em linha com folhas.
 * Uso: cantos de seções e composições, sempre aria-hidden.
 * Herda a cor via `currentColor` e respeita className (tamanho/posição).
 */
export default function BotanicalAccent({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Haste principal curva */}
      <path d="M60 214c-6-52-10-104 2-156 4-18 12-34 24-46" />
      {/* Folhas lado esquerdo */}
      <path d="M56 178c-14 2-26-4-32-16 14-4 27 1 32 16Z" />
      <path d="M52 138c-13 1-24-6-29-18 13-3 25 3 29 18Z" />
      <path d="M52 98c-13 0-23-8-26-20 13-2 24 5 26 20Z" />
      <path d="M58 58c-11-2-19-11-20-23 12 1 20 10 20 23Z" />
      {/* Folhas lado direito */}
      <path d="M62 158c13 4 26 0 34-11-13-6-26-3-34 11Z" />
      <path d="M60 118c12 3 25-2 31-13-13-5-25 0-31 13Z" />
      <path d="M62 78c11 2 23-3 28-14-12-4-23 1-28 14Z" />
      {/* Folha do topo */}
      <path d="M88 14c4-8 12-12 21-11-3 9-11 14-21 11Z" />
    </svg>
  );
}