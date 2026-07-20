import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cursos } from "@/content/cursos";

function obtenerCurso(slug: string) {
  return cursos.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const curso = obtenerCurso(slug);

  if (!curso) {
    return {};
  }

  return {
    title: `${curso.titulo} | Casa Nelly`,
    description: curso.subtitulo,
  };
}

export default async function CursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const curso = obtenerCurso(slug);

  if (!curso) {
    notFound();
  }

  const mensajeWhatsApp = `Hola, quiero reservar mi lugar en el ${curso.titulo}.`;

  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      {/* HERO */}
      <Section className="pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="rounded-[32px] overflow-hidden shadow-xl border border-[#5E5145]/5">
          <Image
            src={curso.imagenHero}
            alt={curso.titulo}
            width={1600}
            height={900}
            priority
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-10">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
            Curso Presencial
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#70703A] leading-tight">
            {curso.titulo}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#5E5145] leading-relaxed">
            {curso.subtitulo}
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message={mensajeWhatsApp}>
              🍪 Reservar mi lugar
            </WhatsAppButton>
          </div>
        </div>
      </Section>

      {/* ¿ES PARA TI? */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A] text-center">
          ¿Este curso es para ti?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-4xl mx-auto">
          {curso.publico.map((item) => (
            <Card
              key={item}
              className="rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                ✅
              </span>
              <p className="text-[#5E5145] leading-relaxed">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ¿QUÉ APRENDERÁS? */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A] text-center">
          ¿Qué aprenderás?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {curso.aprenderas.map((item) => (
            <Card
              key={item}
              className="rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                🎯
              </span>
              <p className="text-[#5E5145] leading-relaxed">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROGRAMA DEL CURSO */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A] text-center">
          Programa del curso
        </h2>
        <div className="flex flex-col gap-6 mt-10 max-w-3xl mx-auto">
          {curso.programa.map((clase) => (
            <Card key={clase.numero} className="rounded-3xl overflow-hidden">
              <div className="w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={clase.imagen}
                  alt={clase.titulo}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#D39A3D] uppercase tracking-wide">
                  Clase {clase.numero} de {curso.programa.length}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#70703A]">
                  {clase.titulo}
                </h3>

                <p className="mt-5 font-semibold text-[#70703A] text-sm uppercase tracking-wide">
                  Objetivos
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 text-[#5E5145] leading-relaxed list-disc list-inside">
                  {clase.objetivos.map((objetivo) => (
                    <li key={objetivo}>{objetivo}</li>
                  ))}
                </ul>

                <p className="mt-5 font-semibold text-[#70703A] text-sm uppercase tracking-wide">
                  Qué aprenderás
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 text-[#5E5145] leading-relaxed list-disc list-inside">
                  {clase.aprendera.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border bg-[#70703A]/5 border-[#70703A]/15 p-4 flex gap-3">
                  <span className="text-lg shrink-0" aria-hidden="true">
                    🎯
                  </span>
                  <p className="text-[#5E5145] leading-relaxed text-sm">
                    <span className="font-semibold text-[#70703A]">
                      Resultado esperado:{" "}
                    </span>
                    {clase.resultado}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ¿QUÉ HACE DIFERENTE ESTE CURSO? */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <div className="rounded-[40px] bg-[#70703A] text-white p-8 sm:p-14 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            ¿Qué hace diferente este curso?
          </h2>
          <p className="mt-6 text-white/90 leading-relaxed text-center max-w-2xl mx-auto">
            En la Escuela de Artes Dulces Casa Nelly no aprenderás recetas
            tomadas de internet. Cada preparación ha sido elaborada, ajustada
            y perfeccionada por la Maestra Nelly a lo largo de años de
            experiencia.
          </p>
          <p className="mt-4 text-white/90 leading-relaxed text-center font-semibold">
            Aquí aprenderás con:
          </p>
          <ul className="mt-6 flex flex-col gap-3 max-w-xl mx-auto">
            {curso.diferenciadores.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#D39A3D] font-bold shrink-0">✔</span>
                <span className="text-white/95 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* RECETA DESTACADA */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <Card className="rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#70703A]">
            🍪 Receta destacada del curso
          </h2>
          <p className="mt-4 text-[#5E5145] leading-relaxed">
            {curso.recetaDestacada.descripcion}
          </p>
          <div className="mt-6 rounded-2xl border bg-[#D39A3D]/10 border-[#D39A3D]/30 p-5 flex gap-3">
            <span className="text-xl shrink-0" aria-hidden="true">
              📖
            </span>
            <p className="text-[#5E5145] leading-relaxed">
              {curso.recetaDestacada.notaExclusividad}
            </p>
          </div>
        </Card>
      </Section>

      {/* ¿QUÉ INCLUYE? */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A] text-center">
          ¿Qué incluye el curso?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {curso.incluye.map((item) => (
            <Card
              key={item}
              className="rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                🌸
              </span>
              <p className="text-[#5E5145] leading-relaxed">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* GALERÍA */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A] text-center">
          Galería
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {curso.galeria.map((src, index) => (
            <div
              key={src}
              className="group rounded-2xl overflow-hidden shadow-sm border border-[#5E5145]/5 aspect-square"
            >
              <Image
                src={src}
                alt={`${curso.titulo} - fotografía ${index + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* AL FINALIZAR PODRÁS */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <Card className="rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto text-center">
          <span className="text-4xl" aria-hidden="true">
            🏆
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#70703A]">
            Al finalizar podrás...
          </h2>
          <p className="mt-5 text-lg text-[#5E5145] leading-relaxed">
            {curso.resultados}
          </p>
        </Card>
      </Section>

      {/* FAQ */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A] text-center mb-10">
          Preguntas frecuentes
        </h2>
        <div className="max-w-2xl mx-auto">
          <FAQAccordion items={curso.faq} />
        </div>
      </Section>

      {/* CONOCE A LA MAESTRA NELLY */}
      <Section className="pb-20 border-t border-[#5E5145]/5 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          <div className="w-full order-2 lg:order-1">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
              Conoce a la Maestra Nelly
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#70703A] leading-tight">
              Una guía con años de experiencia
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#5E5145]">
              Nelly ha dedicado años a perfeccionar sus recetas y técnicas, y
              hoy comparte esa experiencia de forma cercana y personal con
              cada alumna y alumno de la Escuela. Su pasión por enseñar se
              siente desde el primer momento: aquí no solo aprenderás a
              hornear, aprenderás a hacerlo con confianza.
            </p>
          </div>
          <div className="order-1 lg:order-2 w-full">
            <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-xl relative max-h-100 sm:max-h-125">
              <Image
                src="/images/nelly2.jpg"
                alt="Maestra Nelly Elizabeth García León"
                width={900}
                height={1200}
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* LLAMADO FINAL */}
      <Section className="pb-24 border-t border-[#5E5145]/5 pt-16">
        <div className="rounded-[40px] bg-gradient-to-br from-[#D88A85] to-[#D39A3D] text-white p-10 sm:p-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            ¿Lista para preparar tus primeras galletas artesanales?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message={mensajeWhatsApp}>
              🍪 Reservar mi lugar
            </WhatsAppButton>
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#70703A] transition active:scale-95"
            >
              Ver otros cursos
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
