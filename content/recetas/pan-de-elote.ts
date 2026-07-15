import type { Receta } from "../types";

export const panDeElote: Receta = {
  slug: "pan-de-elote",
  tipo: "receta",
  titulo: "Pan de Elote",
  resumen: "Un pan húmedo y dulce, perfecto para acompañar un café.",
  fechaPublicacion: "2026-07-14",
  ingredientes: [
    "2 tazas de granos de elote",
    "4 huevos",
    "1 taza de azúcar",
    "1/2 taza de mantequilla derretida",
    "1 taza de harina",
    "1 cucharada de polvo para hornear",
  ],
  pasos: [
    "Licúa los granos de elote con los huevos y la mantequilla hasta obtener una mezcla homogénea.",
    "Agrega el azúcar y sigue licuando unos segundos más.",
    "Incorpora la harina y el polvo para hornear con movimientos envolventes.",
    "Vierte la mezcla en un molde engrasado y hornea a 180°C durante 40-45 minutos.",
  ],
};
