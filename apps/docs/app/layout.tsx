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
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-auto" style={{ background: "var(--surface-base)" }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
