import FileHashChecker from "@/components/FileHashChecker";
import { MdFingerprint } from "react-icons/md";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://miguelacm.es/tools/file-hash-checker";
const EMBED_URL = process.env.NEXT_PUBLIC_EMBED_URL || "https://miguelacm.es/embed/file-hash-checker";

export const metadata = {
  title: "Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512)",
  description:
    "Calcula el hash SHA-1, SHA-256, SHA-384 o SHA-512 de cualquier archivo directamente en tu navegador y compáralo con un hash publicado para verificar su integridad. El archivo nunca se sube a ningún servidor.",
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512)",
  url: SITE_URL,
  description:
    "Calcula el hash SHA-1, SHA-256, SHA-384 o SHA-512 de cualquier archivo directamente en tu navegador y compáralo con un hash publicado para verificar su integridad. El archivo nunca se sube a ningún servidor.",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  inLanguage: "es-ES",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: {
    "@type": "Person",
    name: "Miguel Ángel Colorado Marin",
    url: "https://miguelacm.es",
  },
  featureList: [
    "4 algoritmos: SHA-1, SHA-256, SHA-384, SHA-512",
    "Cálculo con la Web Crypto API nativa",
    "Arrastrar y soltar archivos",
    "Sin límite artificial de tamaño",
    "Comparación automática con hash conocido",
    "El archivo nunca se sube a ningún servidor",
    "Sin registro",
    "Código abierto",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <MdFingerprint className="text-base" />
              Herramienta gratuita · Código abierto
            </div>
            <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
              Verificador de Hash de Archivos
            </h1>
            <p className="mb-2 text-lg text-text-muted">
              Calcula el hash SHA de cualquier archivo en tu navegador y compáralo con uno publicado.
            </p>
            <p className="text-sm text-text-muted/60">
              Hecho por{" "}
              <a
                href="https://miguelacm.es"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text font-medium hover:opacity-80 transition-opacity"
              >
                MACM
              </a>{" "}
              · Sin registro · Sin anuncios · 100% en el navegador
            </p>
          </div>

          <div className="glass rounded-2xl border border-border/20 p-6 md:p-8">
            <FileHashChecker />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🧮",
                title: "4 algoritmos SHA",
                desc: "SHA-1, SHA-256, SHA-384 y SHA-512, calculados con la Web Crypto API nativa del navegador, sin librerías de terceros.",
              },
              {
                icon: "📁",
                title: "Arrastra y suelta",
                desc: "Arrastra cualquier archivo directamente o haz clic para seleccionarlo, sin límite artificial de tamaño.",
              },
              {
                icon: "✅",
                title: "Comparación automática",
                desc: "Pega el hash publicado por la fuente original y comprueba al instante si coincide o el archivo está alterado.",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="glass rounded-xl border border-border/15 p-5"
              >
                <span className="mb-3 block text-2xl">{item.icon}</span>
                <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border/20 bg-white/3 p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Cómo verificar el hash de un archivo
            </h2>
            <ol className="space-y-3">
              {[
                { n: 1, text: "Arrastra un archivo a la zona indicada o haz clic para seleccionarlo." },
                { n: 2, text: "El hash se calcula automáticamente con el algoritmo elegido." },
                { n: 3, text: "Cambia entre SHA-1, SHA-256, SHA-384 o SHA-512 si lo necesitas." },
                { n: 4, text: "Pega el hash publicado por la fuente original para comprobar si coincide." },
              ].map((step) => (
                <li key={step.n} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    {step.n}
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-white">Preguntas frecuentes</h2>
            {[
              {
                q: "¿Para qué sirve verificar el hash de un archivo?",
                a: "El hash es una huella digital única del contenido del archivo. Comprobarlo contra el hash publicado por la fuente oficial (por ejemplo, en la página de descarga de un sistema operativo) permite confirmar que la descarga no está corrupta ni ha sido manipulada.",
              },
              {
                q: "¿Qué algoritmo debería usar, SHA-1 o SHA-256?",
                a: "SHA-256 es el estándar actual recomendado para verificación de integridad. SHA-1 ya no se considera criptográficamente seguro frente a ataques de colisión deliberados, aunque sigue siendo válido para detectar corrupción accidental.",
              },
              {
                q: "¿Se sube mi archivo a algún servidor al calcular el hash?",
                a: "No, el cálculo se realiza completamente en tu navegador usando la Web Crypto API nativa. El archivo nunca sale de tu dispositivo ni se transmite a ningún sitio.",
              },
              {
                q: "¿Hay algún límite de tamaño de archivo?",
                a: "No hay ningún límite artificial impuesto por la herramienta; el límite real depende de la memoria disponible en tu navegador y dispositivo.",
              },
              {
                q: "¿Qué hago si el hash calculado no coincide con el publicado?",
                a: "Significa que el archivo puede estar corrupto (descarga interrumpida) o alterado respecto al original. Lo más seguro es descartar ese archivo y volver a descargarlo desde la fuente oficial.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-border/20 bg-white/3 p-5"
              >
                <h3 className="mb-2 font-medium text-white">{item.q}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border/20 bg-white/3 p-6">
            <h2 className="mb-2 font-semibold text-white">
              Integra el verificador de hash en tu web
            </h2>
            <p className="mb-4 text-sm text-text-muted">
              Puedes embeber este verificador en cualquier web con un simple iframe.
            </p>
            <div className="mb-3 rounded-lg bg-black/40 p-3">
              <p className="mb-1 text-xs text-text-muted/60">Iframe (integración directa):</p>
              <code className="text-xs text-green-400 break-all">
                {`<iframe src="${EMBED_URL}" width="100%" height="700" style="border:none;border-radius:12px;" title="Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512) — miguelacm.es" loading="lazy"></iframe>`}
              </code>
            </div>
            <div className="rounded-lg bg-black/40 p-3">
              <p className="mb-1 text-xs text-text-muted/60">
                Enlace con atribución (recomendado para backlink):
              </p>
              <code className="text-xs text-green-400 break-all">
                {`<a href="${SITE_URL}" target="_blank" rel="noopener">Verificador de hash de archivos gratis por MACM</a>`}
              </code>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
