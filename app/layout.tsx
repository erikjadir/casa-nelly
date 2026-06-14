import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casa Nelly | Escuela de Artes Dulces",
  description:
    "Cursos de repostería, panadería y emprendimiento con la Maestra Nelly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}