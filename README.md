# 🔍 File Hash Checker — Verificador de integridad de archivos por hash

**Free File Hash Checker.** Compute the SHA-1, SHA-256, SHA-384 or SHA-512 hash of any file directly in your browser and compare it against a published hash to verify integrity, with no upload to any server. No sign-up, no ads, 100% client-side.

🌐 **Demo en vivo / Live demo:** [miguelacm.es/tools/file-hash-checker](https://miguelacm.es/tools/file-hash-checker)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Features

- **4 algoritmos / 4 algorithms:** SHA-1, SHA-256, SHA-384, SHA-512
- **Web Crypto API nativa / Native Web Crypto API:** no third-party libraries
- **Drag & drop:** drop any file or click to select, no artificial size limit
- **Comparación automática / Auto-compare:** paste a known hash and check the match instantly
- **Sin servidor / Zero server:** Everything runs in the browser — nothing is ever uploaded
- **Embebible / Embeddable:** Use it as an iframe on any website
- **Open source:** MIT license, use it freely

---

## 🚀 Quick start

```bash
git clone https://github.com/m-a-c-m/FileHashChecker.git
cd FileHashChecker
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables (optional)

```env
NEXT_PUBLIC_SITE_URL=https://miguelacm.es/tools/file-hash-checker
NEXT_PUBLIC_EMBED_URL=https://miguelacm.es/embed/file-hash-checker
```

---

## 📦 Embed on your website

### Iframe (plug & play)

```html
<iframe
  src="https://miguelacm.es/embed/file-hash-checker"
  width="100%"
  height="700"
  style="border:none;border-radius:12px;"
  title="Verificador de Hash de Archivos Gratis (SHA-256, SHA-1, SHA-512) — miguelacm.es"
  loading="lazy"
></iframe>
```

### Link with attribution (recommended for backlink)

```html
<a href="https://miguelacm.es/tools/file-hash-checker" target="_blank" rel="noopener">
  Verificador de hash de archivos gratis por MACM
</a>
```

> 💡 The link option generates a real backlink that benefits the project. Recommended if your platform supports custom HTML.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework + SSG |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Icons |

---

## 📄 License

MIT © [Miguel Ángel Colorado Marin (MACM)](https://miguelacm.es)

Built with ❤️ by **[MACM](https://miguelacm.es)** — Full Stack Developer & Cybersecurity Specialist from Guadalajara, Spain.

- 🌐 Portfolio: [miguelacm.es](https://miguelacm.es)
- 💼 LinkedIn: [linkedin.com/in/macm](https://www.linkedin.com/in/macm/)
- 🐙 GitHub: [github.com/m-a-c-m](https://github.com/m-a-c-m)
