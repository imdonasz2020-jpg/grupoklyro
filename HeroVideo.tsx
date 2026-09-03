import { useEffect, useRef, useState } from "react";
import { VIDEO_POSTER, VIDEO_URL } from "@/lib/klyro-content";

/**
 * Fundo do hero. Vídeo em autoplay, loop, muted, object-cover,
 * com poster enquanto carrega e fallback caso o vídeo falhe.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {
      /* autoplay bloqueado — o poster permanece visível */
    });
  }, []);

  useEffect(() => {
    const root = ref.current?.parentElement;
    if (!root) return;

    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.09, 90);
        root.style.setProperty("--hero-parallax", `${shift}px`);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {failed ? (
        <img
          src={VIDEO_POSTER}
          alt="Produção audiovisual Klyro em showroom automotivo"
          className="hero-parallax size-full object-cover"
        />
      ) : (
        <video
          ref={ref}
          src={VIDEO_URL}
          poster={VIDEO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          aria-hidden="true"
          className="hero-parallax size-full object-cover"
        />
      )}
      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 bg-klyro-deep/10 mix-blend-screen" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
