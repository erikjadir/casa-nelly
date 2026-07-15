// Flujo futuro (no implementado): formulario de Contacto → correo a la Maestra Nelly
// → ella selecciona y aprueba manualmente → esas historias se agregan aquí.
// Sin publicación automática.

export type Historia = {
  nombre: string;
  ciudad?: string;
  mensaje: string;
  fecha?: string;
};

export const historiasEjemplo: Historia[] = [
  {
    nombre: "Ejemplo: Ana Martínez",
    ciudad: "Puebla",
    mensaje:
      "Contenido de ejemplo — reemplazar con historias reales de alumnas y clientas de Casa Nelly.",
  },
  {
    nombre: "Ejemplo: Laura Sánchez",
    mensaje:
      "Contenido de ejemplo — reemplazar con historias reales de alumnas y clientas de Casa Nelly.",
  },
  {
    nombre: "Ejemplo: Rosa Hernández",
    ciudad: "Cholula",
    mensaje:
      "Contenido de ejemplo — reemplazar con historias reales de alumnas y clientas de Casa Nelly.",
  },
];
