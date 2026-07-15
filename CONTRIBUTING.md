# Filosofía del Proyecto

Casa Nelly no es únicamente un sitio web.

Es una plataforma para compartir conocimiento sobre las artes dulces, inspirar a las personas y acompañarlas en su aprendizaje.

Antes de implementar cualquier funcionalidad nueva, pregúntate:

- ¿Aporta valor al alumno?
- ¿Hace más sencillo aprender?
- ¿Es reutilizable?
- ¿Puede crecer sin tener que reescribirse?
- ¿Respeta el estilo cálido, humano y cercano de la marca?

La prioridad siempre será construir valor antes que construir funcionalidades.

---

## Biblioteca de Conocimiento

Internamente el proyecto ya no se organiza como "páginas", sino como una Biblioteca.

Todo contenido pertenece a la Biblioteca.

Actualmente existen cuatro tipos principales de recursos:

- Recetas
- Guías
- Técnicas
- Tips

En el futuro podrán existir otros tipos, pero cualquier contenido nuevo deberá integrarse dentro de esta filosofía y no como una página aislada.

La navegación pública podrá mostrar únicamente "Recetas", pero internamente todo se considera parte de la Biblioteca.

---

## Principio de reutilización del conocimiento

Antes de crear un recurso nuevo:

- Verificar si ya existe uno similar.
- Si existe, actualizarlo en lugar de duplicarlo.
- Evitar contenido repetido.
- Priorizar una única fuente de verdad para cada tema.

---

# Estilo Editorial

Todas las recetas, guías, técnicas y tips deberán:

- Enseñar con claridad.
- Explicar el porqué de cada paso.
- Utilizar un lenguaje sencillo.
- Evitar tecnicismos innecesarios.
- Mantener un tono cálido y cercano.
- Escribir como si la Maestra Nelly estuviera enseñando personalmente.
- Incluir recomendaciones prácticas.
- Priorizar la experiencia del alumno sobre la teoría.

---

## Sello de identidad

Todas las Guías deberán incluir una sección final titulada:

🌸 El consejo de la Maestra Nelly

Esta sección debe contener una recomendación basada en la experiencia real de la Maestra Nelly, transmitiendo cercanía, confianza y motivación.

Debe convertirse en un sello distintivo de la Biblioteca de Casa Nelly.

---

## Principio de arquitectura

No construimos páginas.

Construimos recursos de conocimiento reutilizables.

Cada nuevo contenido debe poder crecer, reorganizarse y reutilizarse sin modificar la arquitectura del sitio.

La Biblioteca debe crecer mediante la incorporación de nuevos recursos, no mediante la creación indiscriminada de páginas independientes.

---

# Contribuir a Casa Nelly

Guía práctica para las tareas más comunes de mantenimiento del sitio.

## Cómo agregar una receta

1. Crea un archivo nuevo en `content/recetas/<slug>.ts` exportando un objeto `Receta`:

   ```ts
   import type { Receta } from "../types";

   export const miReceta: Receta = {
     slug: "mi-receta",
     tipo: "receta",
     titulo: "Mi Receta",
     resumen: "Una descripción breve.",
     fechaPublicacion: "2026-07-21",
     ingredientes: ["..."],
     pasos: ["..."],
   };
   ```

2. Impórtalo y agrégalo al arreglo en `content/recetas/index.ts`.

No hay que tocar ninguna página: `/recetas/<slug>` se genera solo y la receta aparece automáticamente en la lista de `/recetas`.

## Cómo agregar una guía

Mismo patrón que una receta, en `content/guias/<slug>.ts`, con el tipo `Guia`:

```ts
import type { Guia } from "../types";

export const miGuia: Guia = {
  slug: "mi-guia",
  tipo: "guia",
  titulo: "Mi Guía",
  resumen: "...",
  fechaPublicacion: "2026-07-21",
  secciones: [
    { titulo: "Primera sección", contenido: "..." },
  ],
};
```

Agrégala al arreglo en `content/guias/index.ts`. Queda disponible en `/recetas/<slug>` y listada en la sección "Guías" de `/recetas`.

## Cómo agregar un tip

Mismo patrón en `content/tips/<slug>.ts`, con el tipo `Tip`:

```ts
import type { Tip } from "../types";

export const miTip: Tip = {
  slug: "mi-tip",
  tipo: "tip",
  titulo: "Mi Tip",
  resumen: "...",
  fechaPublicacion: "2026-07-21",
  contenido: "...",
};
```

Agrégalo al arreglo en `content/tips/index.ts`.

## Cómo agregar imágenes

- Coloca el archivo en `public/images/` (o una subcarpeta, ej. `public/images/recetas/`).
- Referéncialo con el componente `Image` de `next/image` usando la ruta absoluta desde `public/`, por ejemplo `/images/recetas/mi-foto.jpg`, indicando siempre `width`/`height`.
- Hoy los tipos `Receta`, `Guia` y `Tip` (`content/types.ts`) no tienen un campo de imagen — las tarjetas de `/recetas` usan un ícono como marcador visual. Si necesitas fotos reales por receta/guía, agrega un campo `imagen?: string` a `content/types.ts` y úsalo en `app/recetas/page.tsx` y `app/recetas/[slug]/page.tsx`.

## Cómo crear una nueva página

1. Crea `app/<ruta>/page.tsx` exportando un componente `default` y, si aplica, un `export const metadata`.
2. Reutiliza `Section` (`components/ui/Section.tsx`) para el ancho/padding estándar y `Card` (`components/ui/Card.tsx`) para bloques de contenido — no repitas esas clases de Tailwind a mano.
3. Para una ruta dinámica (ej. una lista con detalle), usa una carpeta `[slug]/page.tsx` con `generateStaticParams`, siguiendo el patrón de `app/recetas/[slug]/page.tsx`.
4. Mantén la paleta de marca ya definida (`#70703A`, `#5E5145`, `#D39A3D`, `#FAF7F2`) en vez de introducir colores nuevos.

## Cómo agregar navegación

Edita el arreglo `navLinks` en `components/layout/Header.tsx`. Es el único lugar a tocar: el mismo arreglo alimenta tanto el menú de escritorio como el menú móvil, así que no hay que duplicar el link en dos partes.

```ts
const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "La Escuela", href: "/#escuela" },
  { label: "Recetas", href: "/recetas" },
  { label: "Contacto", href: "/contacto" },
];
```

## Estructura del proyecto

```
app/
  layout.tsx              — root layout, monta <Header />
  page.tsx                — página de inicio
  contacto/page.tsx
  contacto/actions.ts      — Server Action de envío de correo (Resend)
  recetas/page.tsx         — hub (Recetas / Guías / Tips)
  recetas/[slug]/page.tsx  — receta, guía o tip individual

components/
  layout/Header.tsx        — nav (fuente de verdad de las rutas del menú)
  ui/Section.tsx            — wrapper de ancho/padding estándar
  ui/Card.tsx                — tarjeta blanca reutilizable
  ui/FAQAccordion.tsx
  ui/WhatsAppButton.tsx
  ui/SocialLinks.tsx
  contacto/ContactForm.tsx   — específico de /contacto
  contacto/HistoriasSection.tsx — sección "Historias que inspiran"

content/
  types.ts                 — tipos Receta, Guia, Tip
  recetas/index.ts + un archivo por receta
  guias/index.ts + un archivo por guía
  tips/index.ts + un archivo por tip
  historias.ts              — testimonios de /contacto (fuera de la Biblioteca)

public/images/              — imágenes del sitio
```

Ver también `CLAUDE.md` para el flujo de trabajo del proyecto (analizar → identificar reutilizables → proponer plan → esperar aprobación → implementar) y las convenciones de diseño.

---

## Regla para futuras implementaciones

Antes de implementar cualquier nueva funcionalidad, evaluar siempre:

1. ¿Resuelve una necesidad real del negocio?
2. ¿Aporta valor a los alumnos?
3. ¿Puede resolverse reutilizando componentes existentes?
4. ¿Escalará correctamente dentro de un año?
5. ¿Mantiene la simplicidad del proyecto?

Evitar sobreingeniería.

La solución más simple que permita crecer será siempre la preferida.
