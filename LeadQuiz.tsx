import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  X,
} from "lucide-react";

import { WHATSAPP_NUMBER } from "@/lib/klyro-content";

type QuizAnswers = {
  name: string;
  niche: string;
  revenue: string;
  service: string;
  objective: string;
};

type LeadQuizProps = {
  open: boolean;
  onClose: () => void;
};

const STEPS = [
  {
    key: "name" as const,
    eyebrow: "01 / 05",
    title: "Antes de começar",
    subtitle: "Como podemos chamar você?",
    options: null,
  },
  {
    key: "niche" as const,
    eyebrow: "02 / 05",
    title: "Qual é o nicho da sua empresa?",
    subtitle: "Isso ajuda a Klyro a entender seu contexto antes da conversa.",
    options: [
      "Saúde / Estética",
      "Automotivo",
      "Imobiliário",
      "Varejo / E-commerce",
      "Serviços",
      "Indústria",
      "Educação",
      "Outro",
    ],
  },
  {
    key: "revenue" as const,
    eyebrow: "03 / 05",
    title: "Qual é o faturamento mensal aproximado?",
    subtitle: "Pode ser uma estimativa. A informação é usada apenas para contextualizar a oportunidade.",
    options: [
      "Até R$ 20 mil",
      "R$ 20 mil a R$ 50 mil",
      "R$ 50 mil a R$ 100 mil",
      "R$ 100 mil a R$ 300 mil",
      "R$ 300 mil a R$ 1 milhão",
      "Acima de R$ 1 milhão",
      "Prefiro não informar",
    ],
  },
  {
    key: "service" as const,
    eyebrow: "04 / 05",
    title: "Qual solução mais interessa neste momento?",
    subtitle: "Você poderá falar sobre outras necessidades diretamente com a equipe.",
    options: [
      "Tráfego pago",
      "Social Media",
      "Produção audiovisual",
      "Website / Landing Page",
      "Software / CRM",
      "Automação",
      "Estrutura completa de marketing",
      "Ainda não sei",
    ],
  },
  {
    key: "objective" as const,
    eyebrow: "05 / 05",
    title: "Qual é o principal objetivo agora?",
    subtitle: "Escolha o que mais se aproxima do seu momento.",
    options: [
      "Gerar mais leads",
      "Aumentar as vendas",
      "Melhorar o posicionamento da marca",
      "Estruturar o marketing",
      "Escalar o que já funciona",
      "Criar uma operação digital do zero",
      "Outro objetivo",
    ],
  },
];

function buildWhatsAppMessage(answers: QuizAnswers) {
  return [
    "Olá! Vim pelo site do Grupo Klyro e fiz o diagnóstico rápido.",
    "",
    `*Nome:* ${answers.name}`,
    `*Nicho:* ${answers.niche}`,
    `*Faturamento mensal:* ${answers.revenue}`,
    `*Serviço de interesse:* ${answers.service}`,
    `*Principal objetivo:* ${answers.objective}`,
    "",
    "Gostaria de entender como a Klyro pode me ajudar.",
  ].join("\n");
}

export function LeadQuiz({ open, onClose }: LeadQuizProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    name: "",
    niche: "",
    revenue: "",
    service: "",
    objective: "",
  });

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const currentStep = STEPS[stepIndex];
  const currentValue = answers[currentStep.key];
  const progress = ((stepIndex + 1) / STEPS.length) * 100;
  const canContinue = currentValue.trim().length > 0;
  const isLast = stepIndex === STEPS.length - 1;

  const whatsappUrl = useMemo(() => {
    const message = buildWhatsAppMessage(answers);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [answers]);

  if (!open) return null;

  const setValue = (value: string) => {
    setAnswers((current) => ({ ...current, [currentStep.key]: value }));
  };

  const next = () => {
    if (!canContinue) return;
    if (!isLast) {
      setStepIndex((index) => index + 1);
      return;
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  const back = () => setStepIndex((index) => Math.max(0, index - 1));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="klyro-quiz-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="quiz-modal relative flex max-h-[92svh] w-full max-w-xl flex-col overflow-hidden border border-white/10 bg-[#090a0d] shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
        <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-klyro/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-56 rounded-full bg-klyro/10 blur-3xl" />

        <div className="relative flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-7">
          <div>
            <p className="eyebrow text-klyro">Diagnóstico Klyro</p>
            <p className="mt-1 text-[10px] tracking-[0.18em] text-metal-dim uppercase">
              Leva menos de 1 minuto
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar diagnóstico"
            className="glass-panel flex size-10 items-center justify-center transition hover:border-klyro hover:bg-white/5"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="relative px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
          <div className="mb-8 h-1 overflow-hidden rounded-full bg-white/6">
            <div
              className="h-full rounded-full bg-klyro transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div key={currentStep.key} className="quiz-step-in">
            <p className="text-[10px] font-semibold tracking-[0.24em] text-klyro uppercase">
              {currentStep.eyebrow}
            </p>
            <h2 id="klyro-quiz-title" className="mt-3 max-w-lg font-display text-2xl leading-[1.08] font-semibold text-metal-gradient sm:text-3xl">
              {currentStep.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {currentStep.subtitle}
            </p>

            <div className="mt-7">
              {currentStep.options ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {currentStep.options.map((option) => {
                    const selected = currentValue === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setValue(option)}
                        className={`quiz-option group flex min-h-14 items-center justify-between gap-4 border px-4 py-3 text-left text-sm transition duration-300 ${
                          selected
                            ? "border-klyro bg-klyro/10 text-foreground shadow-[0_0_0_1px_var(--klyro)]"
                            : "border-white/8 bg-white/[0.015] text-metal-dim hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.035] hover:text-foreground"
                        }`}
                      >
                        <span>{option}</span>
                        <span
                          className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition ${
                            selected ? "border-klyro bg-klyro text-white" : "border-white/10"
                          }`}
                        >
                          {selected && <Check className="size-3" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <label className="block">
                  <span className="sr-only">Seu nome</span>
                  <input
                    autoFocus
                    value={currentValue}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") next();
                    }}
                    placeholder="Digite seu nome"
                    className="w-full border border-white/10 bg-white/[0.025] px-5 py-4 text-base text-foreground outline-none placeholder:text-metal-dim/60 transition focus:border-klyro focus:ring-1 focus:ring-klyro/40"
                  />
                  <span className="mt-3 block text-[11px] text-metal-dim">
                    Usaremos seu nome apenas para deixar a primeira mensagem mais natural.
                  </span>
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-white/8 px-5 py-4 sm:px-7">
          <button
            type="button"
            onClick={back}
            disabled={stepIndex === 0}
            className="inline-flex items-center gap-2 px-2 py-2 text-[10px] font-semibold tracking-[0.18em] text-metal-dim uppercase transition hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
          >
            <ArrowLeft className="size-3.5" />
            Voltar
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!canContinue}
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-klyro px-6 py-3 text-[10px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-35"
            style={{ boxShadow: "var(--shadow-klyro)" }}
          >
            {isLast ? (
              <>
                <MessageCircle className="size-4" />
                Ir para o WhatsApp
              </>
            ) : (
              <>
                Continuar
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
