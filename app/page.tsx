import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      {/* HERO SECTION */}
      <Section className="pt-2 pb-20 md:pt-8 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="order-2 lg:order-1">

            <Image
              src="/images/logo.png"
              alt="Casa Nelly"
              width={280}
              height={280}
              priority
              className="w-[180px] sm:w-[220px] lg:w-[280px] h-auto"
            />

            <div className="block lg:hidden mt-4 mb-8">
              <div className="overflow-hidden rounded-[28px] shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Maestra Nelly"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#70703A]">
              Aprende repostería,
              <br />
              crea dulzuras
              <br />
              y emprende con amor.
            </h1>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-relaxed text-[#5E5145] max-w-xl">
              Cursos de repostería, panadería y decoración diseñados para ayudarte a aprender nuevas técnicas, desarrollar tu creatividad y convertir tu pasión en una oportunidad.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 sm:mt-10">
              <button className="w-full sm:w-auto bg-[#70703A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition shadow-md active:scale-95">
                Ver Cursos
              </button>
              <button className="w-full sm:w-auto border border-[#70703A] text-[#70703A] px-8 py-4 rounded-full font-medium hover:bg-[#70703A] hover:text-white transition active:scale-95">
                Diplomado
              </button>
            </div>
          </div>

          {/* FOTO HERO OPTIMIZADA */}
          <div className="hidden lg:block order-1 lg:order-2 w-full dynamic-img-container">
            <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-xl relative max-h-87.5 sm:max-h-125 lg:max-h-150">
              <Image
                src="/images/hero.jpg"
                alt="Maestra Nelly elaborando repostería"
                width={900}
                height={1200}
                priority
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>

        </div>
      </Section>

      {/* SECCIÓN: CONOCE A NELLY */}
      <Section id="escuela" className="py-16 md:py-24 border-t border-[#5E5145]/5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* FOTO NELLY OPTIMIZADA */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-xl relative max-h-100 sm:max-h-125 lg:max-h-150">
              <Image
                src="/images/nelly2.jpg"
                alt="Maestra Nelly Elizabeth García León"
                width={900}
                height={1200}
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* TEXTO CON ALINEACIÓN CORREGIDA EN MÓVILES */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
              Conoce a la Maestra Nelly
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#70703A] leading-tight">
              Una vida compartiendo dulzura
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#5E5145]">
              Desde hace años, Nelly ha encontrado en la repostería una forma de crear momentos especiales para otras personas. Hoy comparte su experiencia y sus técnicas a través de la Escuela de Artes Dulces, un espacio pensado para aprender, crear y emprender con confianza.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5E5145]">
              Hoy comparte su experiencia a través de la Escuela de Artes
              Dulces, un espacio creado para enseñar, inspirar y ayudar a
              otras personas a desarrollar habilidades que les permitan
              aprender, crear y emprender.
            </p>

            {/* Micro-tarjetas adaptativas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-10">
              <Card className="rounded-2xl p-4 sm:p-5 text-center">
                <div className="text-3xl" aria-hidden="true">🌸</div>
                <p className="mt-2 font-semibold text-[#70703A] text-sm sm:text-base">
                  Repostería
                </p>
              </Card>

              <Card className="rounded-2xl p-4 sm:p-5 text-center">
                <div className="text-3xl" aria-hidden="true">🎂</div>
                <p className="mt-2 font-semibold text-[#70703A] text-sm sm:text-base">
                  Decoración
                </p>
              </Card>

              <Card className="rounded-2xl p-4 sm:p-5 text-center">
                <div className="text-3xl" aria-hidden="true">💡</div>
                <p className="mt-2 font-semibold text-[#70703A] text-sm sm:text-base">
                  Emprendimiento
                </p>
              </Card>
            </div>
          </div>

        </div>
      </Section>

      {/* SECCIÓN: PILARES */}
      <Section className="pb-24">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          <Card className="rounded-3xl p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="text-4xl" aria-hidden="true">🌸</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#70703A]">
              Repostería Artesanal
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5E5145] leading-relaxed">
              Aprende paso a paso técnicas para elaborar postres, pasteles y creaciones dulces.
            </p>
          </Card>

          <Card className="rounded-3xl p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="text-4xl" aria-hidden="true">🎂</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#70703A]">
              Decoración de Pasteles
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5E5145] leading-relaxed">
              Desarrolla tu creatividad y aprende a transformar cada pastel en una obra especial.
            </p>
          </Card>

          <Card className="rounded-3xl p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="text-4xl" aria-hidden="true">💡</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#70703A]">
              Aprende y Emprende
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5E5145] leading-relaxed">
              Convierte tu pasión por la repostería en una oportunidad para generar ingresos.
            </p>
          </Card>

        </div>
      </Section>
    </main>
  );
}
