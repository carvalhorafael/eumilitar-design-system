import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: {
    template: "%s — EuMilitar Design System",
    default: "EuMilitar Design System",
  },
  description:
    "Base de referência visual e de componentes para todos os produtos EuMilitar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="docs-shell">
            <Sidebar />
            <main className="docs-main">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
