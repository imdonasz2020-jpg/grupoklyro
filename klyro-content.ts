/**
 * ------------------------------------------------------------------
 * CONTEÚDO / MÍDIA — GRUPO KLYRO
 * ------------------------------------------------------------------
 * Todas as fotos e vídeos abaixo foram produzidos pela equipe Klyro.
 * Para trocar uma mídia, basta substituir a URL do item correspondente.
 * ------------------------------------------------------------------
 */

import heroVideoAsset from "@/assets/media/klyro-hero.mp4.asset.json";
import heroPosterAsset from "@/assets/media/hero-poster.jpg.asset.json";
import logoAsset from "@/assets/media/klyro-logo.jpg.asset.json";

import amg01 from "@/assets/media/amg-gt-black-series-01.webp.asset.json";
import amg02 from "@/assets/media/amg-gt-black-series-02.webp.asset.json";
import amg03 from "@/assets/media/amg-gt-black-series-03.webp.asset.json";
import amg04 from "@/assets/media/amg-gt-black-series-04.webp.asset.json";
import amg05 from "@/assets/media/amg-gt-black-series-05.webp.asset.json";
import amg06 from "@/assets/media/amg-gt-black-series-06.webp.asset.json";
import amg07 from "@/assets/media/amg-gt-black-series-07.webp.asset.json";
import amg08 from "@/assets/media/amg-gt-black-series-08.webp.asset.json";
import amg09 from "@/assets/media/amg-gt-black-series-09.webp.asset.json";
import amg10 from "@/assets/media/amg-gt-black-series-10.webp.asset.json";

import mac01 from "@/assets/media/porsche-macan-t-01.webp.asset.json";
import mac02 from "@/assets/media/porsche-macan-t-02.webp.asset.json";
import mac03 from "@/assets/media/porsche-macan-t-03.webp.asset.json";
import mac04 from "@/assets/media/porsche-macan-t-04.webp.asset.json";
import mac05 from "@/assets/media/porsche-macan-t-05.webp.asset.json";
import mac06 from "@/assets/media/porsche-macan-t-06.webp.asset.json";
import mac07 from "@/assets/media/porsche-macan-t-07.webp.asset.json";
import mac08 from "@/assets/media/porsche-macan-t-08.webp.asset.json";
import mac09 from "@/assets/media/porsche-macan-t-09.webp.asset.json";
import mac10 from "@/assets/media/porsche-macan-t-10.webp.asset.json";

import pan01 from "@/assets/media/porsche-panamera-turbo-s-01.webp.asset.json";
import pan02 from "@/assets/media/porsche-panamera-turbo-s-02.webp.asset.json";
import pan03 from "@/assets/media/porsche-panamera-turbo-s-03.webp.asset.json";
import pan04 from "@/assets/media/porsche-panamera-turbo-s-04.webp.asset.json";
import pan05 from "@/assets/media/porsche-panamera-turbo-s-05.webp.asset.json";
import pan06 from "@/assets/media/porsche-panamera-turbo-s-06.webp.asset.json";
import pan07 from "@/assets/media/porsche-panamera-turbo-s-07.webp.asset.json";
import pan08 from "@/assets/media/porsche-panamera-turbo-s-08.webp.asset.json";

import q301 from "@/assets/media/audi-q3-sportback-01.webp.asset.json";
import q302 from "@/assets/media/audi-q3-sportback-02.webp.asset.json";
import q303 from "@/assets/media/audi-q3-sportback-03.webp.asset.json";
import q304 from "@/assets/media/audi-q3-sportback-04.webp.asset.json";
import q305 from "@/assets/media/audi-q3-sportback-05.webp.asset.json";
import q306 from "@/assets/media/audi-q3-sportback-06.webp.asset.json";
import q307 from "@/assets/media/audi-q3-sportback-07.webp.asset.json";
import q308 from "@/assets/media/audi-q3-sportback-08.webp.asset.json";
import q309 from "@/assets/media/audi-q3-sportback-09.webp.asset.json";

/** Vídeo de fundo do hero — troque a URL aqui para atualizar o vídeo. */
export const VIDEO_URL = heroVideoAsset.url;
export const VIDEO_POSTER = heroPosterAsset.url;
export const LOGO_URL = logoAsset.url;

/** WhatsApp — atualize o número aqui. */
export const WHATSAPP_NUMBER = "5512991260481";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Quero acelerar minha empresa com o Grupo Klyro.",
)}`;

export type Shot = { url: string; caption: string };

export type CarProject = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  shots: Shot[];
};

/** Carrosséis de fotografia — um por veículo. Fotos produzidas pela equipe Klyro. */
export const CAR_PROJECTS: CarProject[] = [
  {
    id: "amg-gt-black-series",
    name: "Mercedes-AMG GT Black Series",
    brand: "Mercedes-AMG",
    category: "Fotografia Automotiva • Detalhes",
    description:
      "Ensaio completo em showroom: aerofólio, difusor, rodas forjadas, grade Panamericana e o emblema V8 Biturbo. Luz controlada para valorizar volumes e fibra de carbono.",
    shots: [
      { url: amg01.url, caption: "Detalhe — assinatura V8 Biturbo" },
      { url: amg02.url, caption: "Detalhe — lanterna e badge GT Black Series" },
      { url: amg03.url, caption: "Detalhe — capô ventilado e paralama" },
      { url: amg04.url, caption: "Detalhe — roda forjada e pneu de performance" },
      { url: amg05.url, caption: "Frontal — grade Panamericana" },
      { url: amg06.url, caption: "Perfil — linha lateral e aerodinâmica" },
      { url: amg07.url, caption: "Três quartos frontal em showroom" },
      { url: amg08.url, caption: "Traseira — asa e difusor em carbono" },
      { url: amg09.url, caption: "Traseira — quádruplas saídas de escape" },
      { url: amg10.url, caption: "Lateral baixa — postura e stance" },
    ],
  },
  {
    id: "porsche-macan-t",
    name: "Porsche Macan T",
    brand: "Porsche",
    category: "Fotografia Automotiva • Interior & Detalhes",
    description:
      "Ensaio focado em acabamento: interior em vermelho carmim, Burmester, carbono, volante e soleiras. Fotografia de detalhe para destacar materiais e exclusividade.",
    shots: [
      { url: mac01.url, caption: "Interior — alto-falante Burmester" },
      { url: mac02.url, caption: "Interior — volante e cluster" },
      { url: mac03.url, caption: "Frontal — pintura preta em showroom" },
      { url: mac04.url, caption: "Traseira — assinatura luminosa" },
      { url: mac05.url, caption: "Interior — carbono e comandos de porta" },
      { url: mac06.url, caption: "Detalhe — soleira Macan T" },
      { url: mac07.url, caption: "Interior — console central" },
      { url: mac08.url, caption: "Interior — volante em contraluz" },
      { url: mac09.url, caption: "Interior — bancos e ambiente de cabine" },
      { url: mac10.url, caption: "Detalhe — inscrição Macan T" },
    ],
  },
  {
    id: "porsche-panamera-turbo-s",
    name: "Porsche Panamera Turbo S",
    brand: "Porsche",
    category: "Fotografia Automotiva • Showroom",
    description:
      "Cinza fosco em ambiente de showroom premium. Composições frontais, três quartos e detalhes de escape, faróis e badge Panamera Turbo S.",
    shots: [
      { url: pan01.url, caption: "Traseira — saídas de escape centrais" },
      { url: pan02.url, caption: "Frontal — presença e stance" },
      { url: pan03.url, caption: "Três quartos frontal" },
      { url: pan04.url, caption: "Detalhe — badge Panamera Turbo S" },
      { url: pan05.url, caption: "Perfil em showroom" },
      { url: pan06.url, caption: "Detalhe — faróis LED Matrix" },
      { url: pan07.url, caption: "Frontal baixo — largura e proporção" },
      { url: pan08.url, caption: "Lateral — pinças e rodas escurecidas" },
    ],
  },
  {
    id: "audi-q3-sportback",
    name: "Audi Q3 Sportback",
    brand: "Audi",
    category: "Fotografia Automotiva • Concessionária",
    description:
      "Vermelho tango em ambiente de concessionária. Cobertura completa para anúncio e redes sociais: frontal, perfil, traseira, rodas e interior.",
    shots: [
      { url: q301.url, caption: "Frontal em salão de exposição" },
      { url: q302.url, caption: "Detalhe — roda e pneu" },
      { url: q303.url, caption: "Três quartos frontal" },
      { url: q304.url, caption: "Traseira — linha coupé" },
      { url: q305.url, caption: "Perfil — proporção e desenho" },
      { url: q306.url, caption: "Frontal — grade Singleframe" },
      { url: q307.url, caption: "Três quartos traseiro" },
      { url: q308.url, caption: "Traseira — difusor e assinatura" },
      { url: q309.url, caption: "Interior — volante e cabine" },
    ],
  },
];

export type VideoProject = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  /** Troque por /videos/projeto-XX.mp4 ou pela URL do vídeo real. */
  video: string;
  poster: string;
};

/** Vídeos do portfólio — substitua `video` e `poster` pelos arquivos reais. */
export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "audi-showroom-reel",
    title: "Audi — Showroom Reel",
    client: "Concessionária Audi",
    category: "Produção Audiovisual • Automotive",
    description:
      "Reel vertical captado em showroom, com movimentos de câmera lentos e foco em reflexos, volumes e detalhes de pintura.",
    video: VIDEO_URL,
    poster: VIDEO_POSTER,
  },
];

export const PILLARS = [
  {
    n: "01",
    title: "ESTRATÉGIA",
    text: "Planejamento baseado em dados, mercado, posicionamento e objetivos comerciais.",
  },
  {
    n: "02",
    title: "PERFORMANCE",
    text: "Tráfego pago, aquisição de clientes, otimização e análise de resultados.",
  },
  {
    n: "03",
    title: "TECNOLOGIA",
    text: "Landing pages, websites, sistemas, CRM e automações para estruturar a operação.",
  },
  {
    n: "04",
    title: "AUDIOVISUAL",
    text: "Produção de vídeos e fotografias profissionais para transformar produtos e marcas em experiências visuais.",
  },
  {
    n: "05",
    title: "SOCIAL MEDIA",
    text: "Gerenciamento estratégico de redes sociais, planejamento de conteúdo, produção, edição e posicionamento digital.",
  },
];

export const SERVICES = [
  {
    title: "TRÁFEGO PAGO",
    text: "Meta Ads, Google Ads, campanhas de aquisição, remarketing e otimização.",
  },
  {
    title: "SOCIAL MEDIA",
    text: "Gerenciamento de redes sociais, estratégia de conteúdo, planejamento, roteiros, produção, captação e edição.",
  },
  {
    title: "PRODUÇÃO AUDIOVISUAL",
    text: "Vídeos comerciais, reels, fotografia profissional e produção cinematográfica.",
  },
  { title: "WEBSITES", text: "Landing pages e websites de alta conversão." },
  {
    title: "SOFTWARES & CRM",
    text: "Sistemas personalizados para organizar vendas, clientes e operação.",
  },
  {
    title: "AUTOMAÇÃO",
    text: "Automação de processos, atendimento, captação e follow-up.",
  },
];

export const SOCIAL_HIGHLIGHTS = [
  "Equipamentos profissionais de ponta",
  "Fotografia e produção audiovisual",
  "Captação e edição profissional de vídeos",
  "Gerenciamento completo das redes sociais",
  "Estratégia de conteúdo",
  "Análise de desempenho",
  "Profissionais qualificados e experientes",
];

/** Lista de cidades atendidas — deixe vazia ou edite livremente. */
export const CITIES: string[] = [];

export const FUNNEL = ["ATENÇÃO", "INTERESSE", "LEAD", "OPORTUNIDADE", "VENDA"];
