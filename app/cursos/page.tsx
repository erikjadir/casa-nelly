import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { cursos } from "@/content/cursos";

export const metadata: Metadata = {
  title: "Cursos | Casa Nelly",
  description:
    "Cursos presenciales de la Escuela de Artes Dulces Casa Nelly.",
};

export default function CursosPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
          Cursos
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#70703A] leading-tight">
          Aprende con la Maestra Nelly
        </h1>
        <p className="mt-4 text-lg text-[#5E5145] max-w-xl leading-relaxed">
          Cursos presenciales para aprender técnicas profesionales, con el
          acompañamiento cercano de la Escuela de Artes Dulces Casa Nelly.
        </p>
      </Section>

      <Section className="pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso) => (
            <Link key={curso.slug} href={`/cursos/${curso.slug}`}>
              <Card className="rounded-3xl p-6 h-full hover:shadow-md transition-shadow">
                <div className="text-4xl" aria-hidden="true">
                  {curso.icono}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#70703A]">
                  {curso.titulo}
                </h3>
                <p className="mt-2 text-sm text-[#5E5145] leading-relaxed">
                  {curso.subtitulo}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
