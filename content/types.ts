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

export type SeccionGuia = {
  titulo: string;
  contenido: string;
};

export type Guia = ContenidoBase & {
  tipo: "guia";
  secciones: SeccionGuia[];
};

export type Tip = ContenidoBase & {
  tipo: "tip";
  contenido: string;
};

export type Contenido = Receta | Guia | Tip;
