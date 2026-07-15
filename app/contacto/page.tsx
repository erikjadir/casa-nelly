import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { ContactForm } from "@/components/contacto/ContactForm";
import { HistoriasSection } from "@/components/contacto/HistoriasSection";

export const metadata: Metadata = {
  title: "Contacto | Casa Nelly",
  description: "Comunícate con la Escuela de Artes Dulces Casa Nelly.",
};

const horarios = [
  { dia: "Lunes a viernes", horario: "9:00 am – 6:00 pm" },
  { dia: "Sábados", horario: "9:00 am – 2:00 pm" },
  { dia: "Domingos", horario: "Cerrado" },
];

const faqs: FAQItem[] = [
  {
    pregunta: "¿Necesito experiencia previa para tomar un curso?",
    respuesta: "No, los cursos están diseñados para todos los niveles.",
  },
  {
    pregunta: "¿Puedo pagar en mensualidades?",
    respuesta: "Próximamente compartiremos las opciones de pago disponibles.",
  },
  {
    pregunta: "¿Los materiales están incluidos?",
    respuesta: "Depende del curso; te lo indicaremos al inscribirte.",
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-[#70703A]/20">
      {/* HERO */}
      <Section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#D39A3D]">
          Contacto
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#70703A] leading-tight">
          Hablemos
        </h1>
        <p className="mt-4 text-lg text-[#5E5145] max-w-xl leading-relaxed">
          Escríbenos si tienes dudas, felicitaciones o sugerencias. Con gusto te atenderemos.
        </p>
      </Section>

      {/* WHATSAPP */}
      <Section className="pb-16">
        <WhatsAppButton>Escríbele a la maestra Nelly por WhatsApp</WhatsAppButton>
      </Section>

      {/* HISTORIAS QUE INSPIRAN */}
      <Section className="pb-16 border-t border-[#5E5145]/5 pt-16">
        <HistoriasSection />
      </Section>

      {/* FORMULARIO */}
      <Section id="formulario" className="pb-16 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
          Felicitaciones y sugerencias
        </h2>
        <div className="mt-8 max-w-xl">
          <ContactForm />
        </div>
      </Section>

      {/* HORARIOS */}
      <Section className="pb-16 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
          Horarios de atención
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {horarios.map((h) => (
            <Card key={h.dia} className="rounded-2xl p-5 text-center">
              <p className="font-semibold text-[#70703A]">{h.dia}</p>
              <p className="mt-1 text-sm text-[#5E5145]">{h.horario}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* REDES SOCIALES */}
      <Section className="pb-16 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
          Síguenos
        </h2>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </Section>

      {/* UBICACIÓN FUTURA */}
      <Section className="pb-16 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
          Ubicación
        </h2>
        <Card className="rounded-3xl p-8 mt-8 text-center text-[#5E5145]">
          Próximamente compartiremos aquí la ubicación de la escuela.
        </Card>
      </Section>

      {/* FAQ */}
      <Section className="pb-24 border-t border-[#5E5145]/5 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
          Preguntas frecuentes
        </h2>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </Section>
    </main>
  );
}
