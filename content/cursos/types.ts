import type { FAQItem } from "../types";

export type ClaseCurso = {
  numero: number;
  titulo: string;
  objetivos: string[];
  aprendera: string[];
  resultado: string;
  imagen: string;
};

export type RecetaDestacadaCurso = {
  titulo: string;
  descripcion: string;
  notaExclusividad: string;
};

export type Curso = {
  slug: string;
  titulo: string;
  subtitulo: string;
  icono: string;
  imagenHero: string;
  publico: string[];
  aprenderas: string[];
  programa: ClaseCurso[];
  diferenciadores: string[];
  recetaDestacada: RecetaDestacadaCurso;
  incluye: string[];
  galeria: string[];
  resultados: string;
  faq: FAQItem[];
};
