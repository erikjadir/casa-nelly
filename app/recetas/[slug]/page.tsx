import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { recetas } from "@/content/recetas";
import { guias } from "@/content/guias";
import { tips } from "@/content/tips";
import type { Contenido } from "@/content/types";

const todoElContenido: Contenido[] = [...recetas, ...guias, ...tips];

function obtenerContenido(slug: string) {
  return todoElContenido.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return todoElContenido.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const contenido = obtenerContenido(slug);

  if (!contenido) {
    return {};
  }

  return {
    title: `${contenido.titulo} | Casa Nelly`,
    description: contenido.resumen,
  };
}

export default async function ContenidoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const contenido = obtenerContenido(slug);

  if (!contenido) {
    notFound();
  }

  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <Link href="/recetas" className="text-sm text-[#70703A] hover:underline">
          ← Volver a Recetas
        </Link>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#70703A] leading-tight">
          {contenido.titulo}
        </h1>
        <p className="mt-4 text-lg text-[#5E5145] max-w-xl leading-relaxed">
          {contenido.resumen}
        </p>
      </Section>

      <Section className="pb-24">
        {contenido.tipo === "receta" && (
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#70703A]">Ingredientes</h2>
              <ul className="mt-4 flex flex-col gap-2 text-[#5E5145]">
                {contenido.ingredientes.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
            </Card>
            <Card className="rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#70703A]">Preparación</h2>
              <ol className="mt-4 flex flex-col gap-3 text-[#5E5145] list-decimal list-inside">
                {contenido.pasos.map((paso) => (
                  <li key={paso}>{paso}</li>
                ))}
              </ol>
            </Card>
          </div>
        )}

        {contenido.tipo === "guia" && (
          <div className="flex flex-col gap-6">
            {contenido.secciones.map((seccion) => (
              <Card key={seccion.titulo} className="rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#70703A]">{seccion.titulo}</h2>
                <p className="mt-3 text-[#5E5145] leading-relaxed">{seccion.contenido}</p>
              </Card>
            ))}
          </div>
        )}

        {contenido.tipo === "tip" && (
          <Card className="rounded-3xl p-6 sm:p-8">
            <p className="text-[#5E5145] leading-relaxed">{contenido.contenido}</p>
          </Card>
        )}
      </Section>
    </main>
  );
}
