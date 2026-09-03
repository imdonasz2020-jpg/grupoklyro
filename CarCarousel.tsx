import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
import type { CarProject } from "@/lib/klyro-content";
import { Lightbox } from "./Lightbox";

export function CarCarousel({ project }: { project: CarProject }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 900), behavior: "smooth" });
  };

  return (
    <article className="border-t border-hairline py-14 first:border-t-0 sm:py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">{project.brand}</p>
          <h3 className="mt-3 text-3xl font-semibold text-metal-gradient sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-3 text-sm text-klyro tracking-wide">{project.category}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-metal-dim">
            <Camera className="size-3.5 text-klyro" />
            Fotografado pela equipe Klyro
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs tabular-nums text-metal-dim">
            {String(project.shots.length).padStart(2, "0")} fotos
          </span>
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={`Voltar fotos do ${project.name}`}
            className="rounded-full border border-border p-3 text-metal transition hover:border-klyro hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={`Avançar fotos do ${project.name}`}
            className="rounded-full border border-border p-3 text-metal transition hover:border-klyro hover:text-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:gap-4"
      >
        {project.shots.map((shot, i) => (
          <button
            key={shot.url}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative shrink-0 snap-start overflow-hidden border border-hairline bg-surface"
            style={{ width: i % 3 === 0 ? "min(78vw, 30rem)" : "min(62vw, 21rem)" }}
          >
            <img
              src={shot.url}
              alt={`${project.name} — ${shot.caption}. Foto produzida pela equipe Klyro.`}
              loading="lazy"
              className="h-[26rem] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] sm:h-[32rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left">
              <p className="text-xs tracking-wide text-metal">{shot.caption}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-metal-dim opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Ampliar
              </p>
            </div>
            <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition group-hover:ring-klyro/40" />
          </button>
        ))}
      </div>

      {open !== null && (
        <Lightbox
          shots={project.shots}
          index={open}
          projectName={project.name}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </article>
  );
}
