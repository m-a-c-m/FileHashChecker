import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://miguelacm.es/tools/file-hash-checker";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512)",
    template: "%s | File Hash Checker",
  },
  description:
    "Calcula el hash SHA-1, SHA-256, SHA-384 o SHA-512 de cualquier archivo directamente en tu navegador y compáralo con un hash publicado para verificar su integridad. El archivo nunca se sube a ningún servidor.",
  keywords: [
    "verificador hash archivo online",
    "sha256 checksum online",
    "file hash checker gratis",
    "verificar integridad archivo",
    "comparar hash sha256",
    "calcular sha1 sha512 archivo",
  ],
  authors: [{ name: "Miguel Ángel Colorado Marin", url: "https://miguelacm.es" }],
  creator: "Miguel Ángel Colorado Marin",
  openGraph: {
    title: "Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512)",
    description:
      "Calcula y verifica el hash SHA de cualquier archivo directamente en tu navegador, sin subirlo a ningún sitio. Por MACM.",
    url: SITE_URL,
    siteName: "File Hash Checker — MACM",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512)",
    description: "Verifica la integridad de un archivo calculando su hash SHA-256 en el navegador. Por MACM · miguelacm.es",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="author" href="https://miguelacm.es" />
        <meta name="author" content="Miguel Ángel Colorado Marin" />
        <meta name="copyright" content="Miguel Ángel Colorado Marin — miguelacm.es" />
      </head>
      <body className="antialiased">
        {children}
        <footer className="pb-8 text-center text-xs text-text-muted/40">
          ⚡ por{" "}
          <a
            href="https://miguelacm.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted/60 transition-colors hover:text-text-muted underline-offset-2 hover:underline"
          >
            MACM · miguelacm.es
          </a>
          {" · "}
          <a
            href="https://github.com/m-a-c-m/FileHashChecker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted/60 transition-colors hover:text-text-muted underline-offset-2 hover:underline"
          >
            Código abierto
          </a>
        </footer>
      </body>
    </html>
  );
}
