import { useEffect } from "react";
import { X } from "lucide-react";
import type { VideoProject } from "@/lib/klyro-content";

export function VideoModal({
  project,
  onClose,
}: {
  project: VideoProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-background/97 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <header className="flex items-start justify-between gap-4 px-5 py-4 sm:px-8">
        <div className="min-w-0">
          <p className="eyebrow truncate">{project.category}</p>
          <p className="mt-1 truncate font-display text-lg">{project.title}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="rounded-full border border-border p-2.5 text-metal transition hover:border-klyro hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      </header>

      <div className="flex min-h-0 flex-1 items-center justify-center px-3 pb-6">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={project.video}
          poster={project.poster}
          controls
          autoPlay
          playsInline
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full border border-hairline bg-black"
        />
      </div>

      <footer className="hairline-top px-5 py-3 text-center sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-metal-dim">
          Produzido pela equipe Klyro • {project.client}
        </p>
      </footer>
    </div>
  );
}
