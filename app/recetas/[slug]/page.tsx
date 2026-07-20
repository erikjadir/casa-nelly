import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { recetas } from "@/content/recetas";
import { guias } from "@/content/guias";
import { tips } from "@/content/tips";
import type { Contenido, DestacadoTipo } from "@/content/types";

const todoElContenido: Contenido[] = [...recetas, ...guias, ...tips];

const ESTILO_DESTACADO: Record<DestacadoTipo, { icono: string; className: string }> = {
  consejo: { icono: "💡", className: "bg-[#D39A3D]/10 border-[#D39A3D]/30" },
  importante: { icono: "⚠️", className: "bg-[#D88A85]/15 border-[#D88A85]/40" },
  recomendacion: { icono: "❤️", className: "bg-[#D88A85]/8 border-[#D88A85]/25" },
  refrigeracion: { icono: "❄️", className: "bg-[#70703A]/8 border-[#70703A]/20" },
  alimentacion: { icono: "🍞", className: "bg-[#D39A3D]/15 border-[#D39A3D]/35" },
};

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

        {contenido.tipo === "guia" ? (
          <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
                Guía
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#70703A] leading-tight">
                {contenido.titulo}
              </h1>
              <p className="mt-4 text-lg text-[#5E5145] leading-relaxed">
                {contenido.resumen}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {contenido.nivel && (
                  <span className="inline-flex items-center gap-2 bg-white border border-[#5E5145]/10 rounded-full px-4 py-2 text-sm font-medium text-[#5E5145] shadow-sm">
                    🎯 Nivel: {contenido.nivel}
                  </span>
                )}
                {contenido.tiempoLectura && (
                  <span className="inline-flex items-center gap-2 bg-white border border-[#5E5145]/10 rounded-full px-4 py-2 text-sm font-medium text-[#5E5145] shadow-sm">
                    ⏱️ {contenido.tiempoLectura} de lectura
                  </span>
                )}
                <span className="inline-flex items-center gap-2 bg-white border border-[#5E5145]/10 rounded-full px-4 py-2 text-sm font-medium text-[#5E5145] shadow-sm">
                  📖 Guía
                </span>
              </div>
            </div>

            <div className="rounded-[28px] sm:rounded-[36px] shadow-xl border border-[#5E5145]/5 bg-gradient-to-br from-[#D39A3D]/20 via-[#FAF7F2] to-[#70703A]/10 aspect-[4/3] flex items-center justify-center">
              <span className="text-[6rem] sm:text-[8rem]" aria-hidden="true">
                🍞
              </span>
            </div>
          </div>
        ) : (
          <>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#70703A] leading-tight">
              {contenido.titulo}
            </h1>
            <p className="mt-4 text-lg text-[#5E5145] max-w-xl leading-relaxed">
              {contenido.resumen}
            </p>
          </>
        )}
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
          <div className="max-w-3xl mx-auto flex flex-col gap-14">
            <Card className="rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#70703A]">Índice de contenidos</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base">
                {contenido.secciones.map((seccion) => (
                  <li key={seccion.id}>
                    <a
                      href={`#${seccion.id}`}
                      className="text-[#5E5145] hover:text-[#70703A] hover:underline"
                    >
                      {seccion.icono} {seccion.titulo}
                    </a>
                  </li>
                ))}
                {contenido.consejoMaestra && (
                  <li>
                    <a
                      href="#consejo-maestra"
                      className="text-[#5E5145] hover:text-[#70703A] hover:underline"
                    >
                      🌸 El consejo de la Maestra Nelly
                    </a>
                  </li>
                )}
                {contenido.faq && contenido.faq.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="text-[#5E5145] hover:text-[#70703A] hover:underline"
                    >
                      ❔ Preguntas frecuentes
                    </a>
                  </li>
                )}
              </ul>
            </Card>

            <div className="flex flex-col gap-10">
              {contenido.secciones.map((seccion) => (
                <Card
                  key={seccion.id}
                  id={seccion.id}
                  className="rounded-3xl p-6 sm:p-10 scroll-mt-24"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {seccion.icono}
                    </span>
                    <h2 className="text-2xl font-bold text-[#70703A]">
                      {seccion.titulo}
                    </h2>
                  </div>

                  {seccion.parrafos && (
                    <div className="mt-5 flex flex-col gap-4">
                      {seccion.parrafos.map((parrafo) => (
                        <p
                          key={parrafo}
                          className="text-[#5E5145] text-base sm:text-lg leading-relaxed"
                        >
                          {parrafo}
                        </p>
                      ))}
                    </div>
                  )}

                  {seccion.lista && (
                    <ul className="mt-5 flex flex-col gap-3 text-[#5E5145] text-base sm:text-lg leading-relaxed list-disc list-inside">
                      {seccion.lista.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {seccion.destacados && (
                    <div className="mt-6 flex flex-col gap-4">
                      {seccion.destacados.map((destacado, index) => (
                        <div
                          key={index}
                          className={`rounded-2xl border p-5 flex gap-3 ${ESTILO_DESTACADO[destacado.tipo].className}`}
                        >
                          <span className="text-xl shrink-0" aria-hidden="true">
                            {ESTILO_DESTACADO[destacado.tipo].icono}
                          </span>
                          <p className="text-[#5E5145] leading-relaxed">
                            {destacado.texto}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {contenido.consejoMaestra && (
              <Card
                id="consejo-maestra"
                className="rounded-3xl p-8 sm:p-12 scroll-mt-24 border-2 border-[#D88A85]/30 bg-gradient-to-br from-[#D88A85]/10 via-white to-[#D39A3D]/10"
              >
                <span className="text-4xl" aria-hidden="true">
                  🌸
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#70703A]">
                  El consejo de la Maestra Nelly
                </h2>
                <p className="mt-5 text-lg text-[#5E5145] leading-relaxed italic">
                  “{contenido.consejoMaestra}”
                </p>
              </Card>
            )}

            {contenido.faq && contenido.faq.length > 0 && (
              <div id="faq" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#70703A] mb-6">
                  Preguntas frecuentes
                </h2>
                <FAQAccordion items={contenido.faq} />
              </div>
            )}

            <Card className="rounded-3xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-bold text-[#70703A]">
                ¿Necesitas ayuda?
              </h2>
              <p className="mt-3 text-[#5E5145] leading-relaxed max-w-md mx-auto">
                Si tienes dudas sobre tu masa madre, escríbenos por WhatsApp y con
                gusto te ayudamos.
              </p>
              <WhatsAppButton className="mt-6">
                Escríbenos por WhatsApp
              </WhatsAppButton>
            </Card>

            {((contenido.recetasRelacionadas && contenido.recetasRelacionadas.length > 0) ||
              (contenido.guiasRelacionadas && contenido.guiasRelacionadas.length > 0)) && (
              <div className="flex flex-col gap-8 border-t border-[#5E5145]/10 pt-10">
                {contenido.recetasRelacionadas && contenido.recetasRelacionadas.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-[#70703A]">Recetas relacionadas</h2>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      {contenido.recetasRelacionadas.map((relSlug) => {
                        const receta = recetas.find((r) => r.slug === relSlug);
                        if (!receta) return null;
                        return (
                          <Link key={relSlug} href={`/recetas/${relSlug}`}>
                            <Card className="rounded-2xl p-5 h-full hover:shadow-md transition-shadow">
                              <div className="text-2xl" aria-hidden="true">🍞</div>
                              <h3 className="mt-2 font-bold text-[#70703A]">{receta.titulo}</h3>
                              <p className="mt-1 text-sm text-[#5E5145] leading-relaxed">
                                {receta.resumen}
                              </p>
                            </Card>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {contenido.guiasRelacionadas && contenido.guiasRelacionadas.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-[#70703A]">Guías relacionadas</h2>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      {contenido.guiasRelacionadas.map((relSlug) => {
                        const guia = guias.find((g) => g.slug === relSlug);
                        if (!guia) return null;
                        return (
                          <Link key={relSlug} href={`/recetas/${relSlug}`}>
                            <Card className="rounded-2xl p-5 h-full hover:shadow-md transition-shadow">
                              <div className="text-2xl" aria-hidden="true">📖</div>
                              <h3 className="mt-2 font-bold text-[#70703A]">{guia.titulo}</h3>
                              <p className="mt-1 text-sm text-[#5E5145] leading-relaxed">
                                {guia.resumen}
                              </p>
                            </Card>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link href="/recetas" className="text-sm text-[#70703A] hover:underline">
              ← Volver a Recetas
            </Link>
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
