import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { recetas } from "@/content/recetas";
import { tips } from "@/content/tips";

export const metadata: Metadata = {
  title: "Recetas | Casa Nelly",
  description: "Recetas y tips de la Escuela de Artes Dulces Casa Nelly.",
};

export default function RecetasPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
          Recetas
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#70703A] leading-tight">
          Recetas y tips
        </h1>
        <p className="mt-4 text-lg text-[#5E5145] max-w-xl leading-relaxed">
          Contenido que iremos ampliando semana a semana.
        </p>
      </Section>

      <Section className="pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">Recetas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {recetas.map((r) => (
            <Link key={r.slug} href={`/recetas/${r.slug}`}>
              <Card className="rounded-3xl p-6 h-full hover:shadow-md transition-shadow">
                <div className="text-4xl" aria-hidden="true">🍰</div>
                <h3 className="mt-4 text-xl font-bold text-[#70703A]">{r.titulo}</h3>
                <p className="mt-2 text-sm text-[#5E5145] leading-relaxed">{r.resumen}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pb-24 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">Tips</h2>
        {tips.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {tips.map((t) => (
              <Link key={t.slug} href={`/recetas/${t.slug}`}>
                <Card className="rounded-3xl p-6 h-full hover:shadow-md transition-shadow">
                  <div className="text-4xl" aria-hidden="true">💡</div>
                  <h3 className="mt-4 text-xl font-bold text-[#70703A]">{t.titulo}</h3>
                  <p className="mt-2 text-sm text-[#5E5145] leading-relaxed">{t.resumen}</p>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-[#5E5145]">Próximamente.</p>
        )}
      </Section>

      <Section className="pb-24 border-t border-[#5E5145]/5 pt-16">
        <Card className="rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
            ¿Quieres aprender paso a paso?
          </h2>
          <p className="mt-3 text-[#5E5145] leading-relaxed">
            Lleva lo que aprendes aquí al siguiente nivel con el
            acompañamiento presencial de la Maestra Nelly.
          </p>
          <Link
            href="/cursos"
            className="inline-flex items-center gap-2 bg-[#70703A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition shadow-md active:scale-95 mt-6"
          >
            Ver Cursos
          </Link>
        </Card>
      </Section>
    </main>
  );
}
