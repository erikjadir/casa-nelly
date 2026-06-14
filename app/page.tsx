"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      
{/* BARRA DE NAVEGACIÓN FLOTANTE */}
      <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#5E5145]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          
          {/* LOGOTIPO EN TEXTO */}
          <a href="#" className="flex flex-col group transition-opacity duration-200 hover:opacity-90">
            <span className="text-[#70703A] font-bold tracking-[0.15em] text-lg leading-tight">
              CASA NELLY
            </span>
            <p className="text-xs text-[#5E5145] tracking-wide font-light">
              Escuela de Artes Dulces
            </p>
          </a>

          {/* MENÚ COMPLETO (ESCRITORIO) */}
          <nav className="hidden md:flex gap-10 text-[#5E5145] font-medium items-center">
            <a href="#" className="relative py-1 hover:text-[#70703A] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#70703A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Inicio</a>
            <a href="#" className="relative py-1 hover:text-[#70703A] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#70703A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Cursos</a>
            <a href="#" className="relative py-1 hover:text-[#70703A] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#70703A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Diplomado</a>
            <a href="#" className="relative py-1 hover:text-[#70703A] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#70703A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Galería</a>
            <a href="#" className="relative py-1 hover:text-[#70703A] transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#70703A] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Contacto</a>
          </nav>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#5E5145] hover:text-[#70703A] focus:outline-none rounded-lg hover:bg-[#5E5145]/5 transition-colors"
            aria-label="Abrir menú de navegación"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MENÚ DESPLEGABLE CON ANIMACIÓN SUTIL (MÓVIL) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FAF7F2] border-b border-[#5E5145]/10 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-[#5E5145] font-medium">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-[#70703A] transition-colors">Inicio</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-[#70703A] transition-colors">Cursos</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-[#70703A] transition-colors">Diplomado</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-[#70703A] transition-colors">Galería</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-[#70703A] transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-2 pb-20 md:pt-8 md:pb-24">
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
      </section>

      {/* SECCIÓN: CONOCE A NELLY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 border-t border-[#5E5145]/5">
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
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-[#5E5145]/5">
                <div className="text-3xl" aria-hidden="true">🌸</div>
                <p className="mt-2 font-semibold text-[#70703A] text-sm sm:text-base">
                  Repostería
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-[#5E5145]/5">
                <div className="text-3xl" aria-hidden="true">🎂</div>
                <p className="mt-2 font-semibold text-[#70703A] text-sm sm:text-base">
                  Decoración
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-[#5E5145]/5">
                <div className="text-3xl" aria-hidden="true">💡</div>
                <p className="mt-2 font-semibold text-[#70703A] text-sm sm:text-base">
                  Emprendimiento
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN: PILARES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#5E5145]/5 hover:shadow-md transition-shadow">
            <div className="text-4xl" aria-hidden="true">🌸</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#70703A]">
              Repostería Artesanal
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5E5145] leading-relaxed">
              Aprende paso a paso técnicas para elaborar postres, pasteles y creaciones dulces.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#5E5145]/5 hover:shadow-md transition-shadow">
            <div className="text-4xl" aria-hidden="true">🎂</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#70703A]">
              Decoración de Pasteles
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5E5145] leading-relaxed">
              Desarrolla tu creatividad y aprende a transformar cada pastel en una obra especial.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#5E5145]/5 hover:shadow-md transition-shadow">
            <div className="text-4xl" aria-hidden="true">💡</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#70703A]">
              Aprende y Emprende
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5E5145] leading-relaxed">
              Convierte tu pasión por la repostería en una oportunidad para generar ingresos.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}