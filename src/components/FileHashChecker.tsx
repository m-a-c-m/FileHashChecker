"use client";

import { useState, useCallback, useRef } from "react";
import { FiUpload, FiCopy, FiCheck, FiAlertTriangle, FiCheckCircle, FiXCircle } from "react-icons/fi";

interface Props { locale?: string; }

const ALGORITHMS = [
  { id: "SHA-1", label: "SHA-1" },
  { id: "SHA-256", label: "SHA-256" },
  { id: "SHA-384", label: "SHA-384" },
  { id: "SHA-512", label: "SHA-512" },
] as const;

type Algo = typeof ALGORITHMS[number]["id"];

function bufferToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function FileHashChecker({ locale = "es" }: Props) {
  const isEs = locale === "es";

  const [file, setFile] = useState<File | null>(null);
  const [algo, setAlgo] = useState<Algo>("SHA-256");
  const [hash, setHash] = useState("");
  const [computing, setComputing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [compareValue, setCompareValue] = useState("");
  const fileRef = useRef<File | null>(null);

  const computeHash = useCallback(async (f: File, a: Algo) => {
    setComputing(true);
    setError(null);
    setHash("");
    try {
      const buffer = await f.arrayBuffer();
      const digest = await crypto.subtle.digest(a, buffer);
      setHash(bufferToHex(digest));
    } catch {
      setError(isEs ? "No se pudo calcular el hash de este archivo." : "Couldn't compute this file's hash.");
    } finally {
      setComputing(false);
    }
  }, [isEs]);

  const loadFile = useCallback((f: File) => {
    setFile(f);
    fileRef.current = f;
    computeHash(f, algo);
  }, [algo, computeHash]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) loadFile(f);
    e.target.value = "";
  }, [loadFile]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) loadFile(f);
  }, [loadFile]);

  const changeAlgo = useCallback((a: Algo) => {
    setAlgo(a);
    if (fileRef.current) computeHash(fileRef.current, a);
  }, [computeHash]);

  const copy = useCallback(async () => {
    if (!hash) return;
    await navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [hash]);

  const resetFile = useCallback(() => {
    setFile(null);
    fileRef.current = null;
    setHash("");
    setCompareValue("");
    setError(null);
  }, []);

  const btnToggle = (active: boolean) =>
    `rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? "border-primary/50 bg-primary/10 text-primary"
        : "border-border/30 bg-surface/60 text-text-muted hover:text-text"
    }`;

  const matchState = compareValue.trim()
    ? compareValue.trim().toLowerCase() === hash.toLowerCase() ? "match" : "mismatch"
    : null;

  if (!file) {
    return (
      <div className="space-y-4">
        <div
          className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-border/40 bg-surface/40 p-10 transition-colors hover:border-primary/50 hover:bg-primary/5"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("fh-file-input")?.click()}
        >
          <FiUpload className="text-5xl text-primary/40" />
          <div className="text-center">
            <p className="text-base font-medium text-text-muted">
              {isEs ? "Arrastra cualquier archivo aquí o haz clic para seleccionar" : "Drag any file here or click to select"}
            </p>
            <p className="mt-1.5 text-sm text-text-muted/50">
              {isEs ? "Sin límite de tamaño artificial" : "No artificial size limit"}
            </p>
          </div>
          <input id="fh-file-input" type="file" className="hidden" onChange={handleFileInput} />
        </div>
        {error && (
          <div className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
            <FiAlertTriangle className="shrink-0" />
            {error}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-3 rounded-xl border border-border/20 bg-surface/30 p-4 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <p className="truncate font-semibold text-white">{file.name}</p>
          <p className="mt-1 text-sm text-text-muted">{(file.size / 1024).toFixed(1)} KB</p>
        </div>
        <button
          onClick={resetFile}
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-border/30 bg-surface/60 px-4 py-2 text-sm text-text-muted transition-colors hover:border-border/60 hover:text-text"
        >
          {isEs ? "Cambiar archivo" : "Change file"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {ALGORITHMS.map((a) => (
          <button key={a.id} onClick={() => changeAlgo(a.id)} className={btnToggle(algo === a.id)}>{a.label}</button>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-text-muted">{algo}</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={computing ? (isEs ? "Calculando…" : "Computing…") : hash}
            readOnly
            spellCheck={false}
            className="w-full rounded-xl border border-border/30 bg-surface/40 px-4 py-3 font-mono text-sm text-text"
          />
          <button
            onClick={copy}
            disabled={!hash}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20 disabled:opacity-40"
          >
            {copied ? <FiCheck /> : <FiCopy />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-text-muted">{isEs ? "Comparar con un hash conocido (opcional)" : "Compare with a known hash (optional)"}</label>
        <div className="relative">
          <input
            type="text"
            value={compareValue}
            onChange={(e) => setCompareValue(e.target.value)}
            placeholder={isEs ? "Pega aquí el hash publicado para verificar la integridad…" : "Paste the published hash here to verify integrity…"}
            spellCheck={false}
            className={`w-full rounded-xl border bg-surface/60 px-4 py-3 pr-10 font-mono text-sm text-text ${
              matchState === "match" ? "border-green-500/50" : matchState === "mismatch" ? "border-red-500/50" : "border-border/30"
            }`}
          />
          {matchState === "match" && <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400" />}
          {matchState === "mismatch" && <FiXCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400" />}
        </div>
        {matchState === "match" && (
          <p className="text-xs text-green-400">{isEs ? "Coincide: el archivo es íntegro." : "Match: the file is intact."}</p>
        )}
        {matchState === "mismatch" && (
          <p className="text-xs text-red-400">{isEs ? "No coincide: el archivo puede estar corrupto o alterado." : "Doesn't match: the file may be corrupted or altered."}</p>
        )}
      </div>

      <p className="text-xs text-text-muted/50">
        {isEs
          ? "El hash se calcula con la Web Crypto API directamente en tu navegador. El archivo nunca se sube a ningún servidor."
          : "The hash is computed with the Web Crypto API directly in your browser. The file is never uploaded to any server."}
      </p>
    </div>
  );
}
