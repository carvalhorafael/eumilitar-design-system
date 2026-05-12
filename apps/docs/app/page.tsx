import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "EuMilitar Design System" };

const sections = [
  {
    number: "01",
    title: "Cores",
    href: "/fundamentos/cores",
    description:
      "Escala primitiva, tokens semânticos e paletas das forças militares.",
    preview: ["#1f4d2a", "#ede4cf", "#1a1612", "#c8bda5", "#3b7a47"],
  },
  {
    number: "02",
    title: "Tipografia",
    href: "/fundamentos/tipografia",
    description:
      "Barlow Condensed, Barlow e JetBrains Mono — cada um com papel definido.",
    preview: null,
  },
  {
    number: "03",
    title: "Espaçamento",
    href: "/fundamentos/espacamento",
    description: "Grid de 4px e escala de espaçamento --sp-1 a --sp-24.",
    preview: null,
  },
  {
    number: "04",
    title: "Tokens",
    href: "/fundamentos/tokens",
    description: "Referência completa de todas as CSS Custom Properties.",
    preview: null,
  },
];

const principles = [
  {
    tag: "Neo-Brutalismo",
    text: "Sombras offset sem blur, bordas explícitas, profundidade honesta. Sem fingimento de elevação.",
  },
  {
    tag: "Field Manual",
    text: "Barlow Condensed em caixa alta, monospace com tracking alto, numeração sequencial de seções.",
  },
  {
    tag: "Swiss Typography",
    text: "Escala sistemática, tokens semânticos, hierarquia de cor com mesma luminância.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative border-b-2 px-10 py-16 overflow-hidden"
        style={{
          borderColor: "var(--border-strong)",
          background: "var(--surface-brand)",
        }}
      >
        {/* Decoração geométrica */}
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-10"
          style={{
            background: "var(--n-50)",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-64 w-32 h-32 opacity-10"
          style={{
            background: "var(--n-50)",
            clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative flex items-start justify-between">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--b-300)" }}
            >
              EuMilitar — Sistema de Design
            </span>
            <h1
              className="text-6xl font-black uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--n-50)",
                maxWidth: "600px",
              }}
            >
              Base Visual
              <br />
              da Marca
            </h1>
            <p
              className="text-base max-w-lg"
              style={{ color: "var(--b-200)", lineHeight: 1.6 }}
            >
              Referência central para design, produto e marketing. Cores,
              tipografia, componentes e padrões para todos os produtos EuMilitar.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Swatches de preview */}
        <div className="flex gap-1 mt-12">
          {["#1a1612", "#1f4d2a", "#3b7a47", "#c8bda5", "#ede4cf"].map((c) => (
            <div
              key={c}
              className="h-3 flex-1 border"
              style={{ background: c, borderColor: "rgba(0,0,0,0.2)" }}
            />
          ))}
        </div>
      </div>

      <div className="px-10 py-12 max-w-5xl">

        {/* Princípios visuais */}
        <div className="mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
          >
            Linguagem Visual
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.tag}
                className="border-2 p-5"
                style={{
                  borderColor: "var(--border-strong)",
                  background: "var(--paper)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span
                  className="text-xs font-black uppercase tracking-widest block mb-3 pb-3 border-b-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-brand)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  {p.tag}
                </span>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seções */}
        <div>
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
          >
            Fundamentos
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block border-2 overflow-hidden group transition-all"
                style={{
                  borderColor: "var(--border-strong)",
                  background: "var(--paper)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {/* Preview de cor (apenas para Cores) */}
                {s.preview && (
                  <div className="flex h-8">
                    {s.preview.map((c) => (
                      <div key={c} className="flex-1" style={{ background: c }} />
                    ))}
                  </div>
                )}
                {!s.preview && (
                  <div
                    className="h-8 flex items-center px-5"
                    style={{ background: "var(--surface-dark)" }}
                  >
                    {s.number === "02" && (
                      <span
                        className="text-lg font-black uppercase"
                        style={{ fontFamily: "var(--font-display)", color: "var(--b-300)" }}
                      >
                        Aa Bb Cc
                      </span>
                    )}
                    {s.number === "03" && (
                      <div className="flex items-end gap-1">
                        {[4, 8, 16, 32, 64].map((w) => (
                          <div
                            key={w}
                            style={{
                              width: `${w / 2}px`,
                              height: `${w / 2}px`,
                              background: "var(--b-400)",
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {s.number === "04" && (
                      <span
                        className="text-xs"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--b-300)" }}
                      >
                        --color-brand-700: #1f4d2a
                      </span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="px-5 py-4 border-t-2" style={{ borderColor: "var(--border-strong)" }}>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-bold"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
                    >
                      {s.number}
                    </span>
                    <h2
                      className="text-xl font-black uppercase leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                    >
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {s.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="px-5 py-3 border-t flex items-center justify-end"
                  style={{
                    borderColor: "var(--border-default)",
                    background: "var(--paper-deep)",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-brand)",
                    }}
                  >
                    Ver →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
