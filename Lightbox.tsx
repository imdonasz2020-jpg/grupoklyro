import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import type { Shot } from "@/lib/klyro-content";

export function Lightbox({
  shots,
  index,
  onClose,
  onIndexChange,
  projectName,
}: {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  projectName: string;
}) {
  const [zoomed, setZoomed] = useState(false);

  const next = useCallback(
    () => onIndexChange((index + 1) % shots.length),
    [index, shots.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + shots.length) % shots.length),
    [index, shots.length, onIndexChange],
  );

  useEffect(() => setZoomed(false), [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        setZoomed((z) => !z);
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, onClose]);

  const shot = shots[index];

  return (
    <div className="fixed inset-0 z-[90] flex flex-col bg-background/97 backdrop-blur-xl animate-fade-in">
      <header className="flex items-center justify-between px-5 py-4 sm:px-8">
        <div className="min-w-0">
          <p className="eyebrow truncate">{projectName}</p>
          <p className="mt-1 truncate text-sm text-metal">{shot.caption}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-xs tabular-nums text-metal-dim sm:block">
            {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? "Reduzir zoom" : "Ampliar"}
            className="rounded-full border border-border p-2.5 text-metal transition hover:border-klyro hover:text-foreground"
          >
            {zoomed ? <ZoomOut className="size-4" /> : <ZoomIn className="size-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full border border-border p-2.5 text-metal transition hover:border-klyro hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto px-3 pb-3">
        <img
          src={shot.url}
          alt={`${projectName} — ${shot.caption}. Foto produzida pela equipe Klyro.`}
          onClick={() => setZoomed((z) => !z)}
          className={
            zoomed
              ? "max-w-none cursor-zoom-out"
              : "max-h-full max-w-full cursor-zoom-in object-contain"
          }
          style={zoomed ? { height: "180%" } : undefined}
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full glass-panel p-3 text-metal transition hover:text-foreground sm:left-6"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima foto"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full glass-panel p-3 text-metal transition hover:text-foreground sm:right-6"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <footer className="hairline-top px-5 py-3 text-center sm:px-8">
        <p className="text-[11px] tracking-[0.22em] text-metal-dim uppercase">
          Foto produzida pela equipe Klyro
        </p>
      </footer>
    </div>
  );
}
