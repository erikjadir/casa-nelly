export type TipoContenido = "receta" | "guia" | "tip";

type ContenidoBase = {
  slug: string;
  titulo: string;
  resumen: string;
  fechaPublicacion: string;
};

export type Receta = ContenidoBase & {
  tipo: "receta";
  ingredientes: string[];
  pasos: string[];
};

export type DestacadoTipo =
  | "consejo"
  | "importante"
  | "recomendacion"
  | "refrigeracion"
  | "alimentacion";

export type Destacado = {
  tipo: DestacadoTipo;
  texto: string;
};

export type SeccionGuia = {
  id: string;
  titulo: string;
  icono: string;
  parrafos?: string[];
  lista?: string[];
  destacados?: Destacado[];
};

export type FAQItem = {
  pregunta: string;
  respuesta: string;
};

export type Guia = ContenidoBase & {
  tipo: "guia";
  nivel?: string;
  tiempoLectura?: string;
  secciones: SeccionGuia[];
  consejoMaestra?: string;
  faq?: FAQItem[];
  recetasRelacionadas?: string[];
  guiasRelacionadas?: string[];
};

export type Tip = ContenidoBase & {
  tipo: "tip";
  contenido: string;
};

export type Contenido = Receta | Guia | Tip;
