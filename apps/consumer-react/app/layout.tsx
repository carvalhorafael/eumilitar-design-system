import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consumer React",
  description: "Consumer mínimo do EuMilitar Design System fora do app docs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
