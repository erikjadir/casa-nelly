# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

No hay suite de tests configurada en este proyecto (sin framework de testing instalado, sin script `test`).

**Variables de entorno**: `RESEND_API_KEY` (envío de correo desde `/contacto`) y `CONTACT_EMAIL_TO` (opcional, correo destino; si se omite usa el valor por defecto en `app/contacto/actions.ts`) — ver `.env.local.example`. Copiar a `.env.local` (no se versiona) con una API key real de [resend.com](https://resend.com).

## Arquitectura

Next.js 16.2.9 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Cuatro directorios principales: `app/` (rutas), `components/` (UI reutilizable), `content/` (datos de la Biblioteca), `public/` (estáticos).

**Rutas implementadas** (`app/`):
- `/` (`app/page.tsx`) — home: hero, sección "Conoce a Nelly" (`id="escuela"`, enlazada desde el nav), sección "Pilares".
- `/contacto` (`app/contacto/page.tsx`).
- `/recetas` (`app/recetas/page.tsx`) — hub de la Biblioteca, agrupa visualmente Recetas/Guías/Tips.
- `/recetas/[slug]` (`app/recetas/[slug]/page.tsx`) — ruta dinámica única para cualquier recurso de la Biblioteca (receta, guía o tip); usa `generateStaticParams` para pre-generar una página por cada slug de `content/`, y renderiza distinto según el campo `tipo` del recurso.
- `app/layout.tsx` — root layout: monta `<Header />` (ver abajo), define `metadata` y carga la fuente `DM_Sans`.

**Componentes reutilizables** (`components/`):
- `layout/Header.tsx` — nav del sitio (`"use client"`, controla el menú móvil). Los links viven en un único arreglo `navLinks`, usado tanto para el menú de escritorio como el móvil.
- `ui/Section.tsx` — wrapper de ancho máximo/padding estándar (`max-w-7xl mx-auto px-6 lg:px-10`), usado en todas las páginas.
- `ui/Card.tsx` — tarjeta blanca base (`shadow-sm border`); no fija `rounded-*` a propósito (cada uso lo declara vía `className` para evitar conflictos de clases de Tailwind).
- `ui/FAQAccordion.tsx`, `ui/WhatsAppButton.tsx`, `ui/SocialLinks.tsx` — usados en `/contacto`.
- `contacto/ContactForm.tsx` — específico de `/contacto`, no generalizado (sin segundo caso de uso todavía). Envía el formulario mediante la Server Action `enviarMensajeContacto` (`app/contacto/actions.ts`, usa Resend) vía `useActionState`; no hay API route separada. Incluye un campo honeypot (`empresa`, oculto visualmente) como protección simple contra bots — no hay reCAPTCHA ni servicio externo.
- `contacto/HistoriasSection.tsx` — sección "Historias que inspiran" en `/contacto`, lee de `content/historias.ts` (contenido de ejemplo; curación manual futura, no automática).

**Biblioteca** (`content/`): separación estricta entre contenido y presentación — `content/` solo tiene datos tipados (`types.ts` define `Receta`, `Guia`, `Tip`), sin JSX ni lógica de UI; `app/recetas/` es la única capa que los renderiza. Un archivo por recurso (`content/recetas/<slug>.ts`, `content/guias/<slug>.ts`, `content/tips/<slug>.ts`), agregado en el `index.ts` de su carpeta. Ver `BIBLIOTECA.md` para el estándar editorial y la sección "Modelo de contenido" más abajo para la relación entre ese estándar y `content/types.ts`.

- `app/globals.css` — importa Tailwind v4 y define variables CSS de marca (`--background`, `--foreground`, `--sage`, `--pink`, `--gold`). Nota: los componentes actuales no usan estas variables; usan hex directo vía clases arbitrarias de Tailwind (p. ej. `text-[#70703A]`) que coinciden con la misma paleta. Al agregar código nuevo, preferir consistencia con lo que ya exista en el archivo que se esté tocando en vez de mezclar ambos enfoques sin justificación.
- `public/images/` — imágenes (`logo.png`, `hero.jpg`, `nelly2.jpg`), cargadas con `next/image` y `width`/`height` explícitos.
- Alias de import `@/*` → raíz del proyecto (`tsconfig.json`).

### Paleta de marca

| Variable CSS | Hex | Uso actual |
|---|---|---|
| `--background` | `#FAF7F2` | fondo general |
| `--foreground` | `#5E5145` | texto de cuerpo |
| `--sage` | `#70703A` | títulos, enlaces, botón primario |
| `--gold` | `#D39A3D` | textos de etiqueta/eyebrow |
| `--pink` | `#D88A85` | definida en `globals.css`, sin uso visible aún en `page.tsx` |

Patrón visual repetido: tarjetas blancas `rounded-2xl`/`rounded-3xl` con `shadow-sm border border-[#5E5145]/5`.

## Modelo de contenido (Biblioteca)

`BIBLIOTECA.md` (raíz del proyecto) es la guía editorial de la Biblioteca de Casa Nelly: define el estándar hacia el que debe evolucionar el contenido (Recetas, Guías, Técnicas, Tips), incluyendo campos como nivel de dificultad, material necesario, errores comunes, etc. `content/types.ts` es la implementación técnica actual, y **deliberadamente no modela todavía todos esos campos** — hoy solo tiene lo que el contenido real usa (título, resumen, ingredientes/pasos en `Receta`; secciones en `Guia`; no existe un tipo `Tecnica`).

Esta diferencia es **deuda técnica planificada, no un error a corregir de inmediato**. Principio de evolución incremental:

- El modelo técnico (`content/types.ts`) acompaña al contenido real; no se adelanta a él.
- No agregar campos ni tipos (ej. `Tecnica`) solo para anticipar el futuro — esperar a que exista una necesidad concreta (un contenido real que los requiera).
- Cuando se cree la primera Técnica real, o una receta/guía necesite un metadato nuevo de `BIBLIOTECA.md` (ej. nivel de dificultad, material necesario), ampliar `content/types.ts` de forma aditiva, sin romper la compatibilidad de lo ya existente.
- `BIBLIOTECA.md` y `content/types.ts` deben evolucionar de forma sincronizada conforme crece la Biblioteca, pero `BIBLIOTECA.md` no se debe modificar para "bajar" su estándar al nivel del código — es el código el que sube.

## Convenciones y flujo de trabajo

- Reutilizar componentes y patrones existentes en vez de duplicar código o crear variantes similares.
- Mantener el código limpio; no duplicar lógica.
- No romper funcionalidades existentes.
- Respetar la arquitectura del proyecto y el diseño visual/paleta ya definidos.

Antes de modificar cualquier archivo:
1. Analizar toda la estructura relacionada con la tarea.
2. Identificar componentes o patrones reutilizables existentes.
3. Explicar el plan de implementación (qué archivos se tocarán y por qué).
4. Esperar aprobación explícita antes de escribir código.

Después de aprobado el plan:
- Modificar únicamente los archivos necesarios para la tarea.
- No renombrar ni reestructurar nada sin justificación explícita.
- Si se detecta una mejora importante fuera del alcance pedido, proponerla primero y esperar aprobación antes de implementarla.
