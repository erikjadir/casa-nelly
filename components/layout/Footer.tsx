import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { WHATSAPP_NUMBER } from "@/components/ui/WhatsAppButton";
import { navLinks } from "@/components/layout/navLinks";

const CORREO_CONTACTO = "nellyelizabethleon@gmail.com";

const redesSociales = [
  {
    nombre: "Instagram",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    nombre: "Facebook",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5v6H13.5v-6H16l0.5-3H13.5V9c0-0.3 0.2-0.5 0.5-0.5Z" />
      </svg>
    ),
  },
  {
    nombre: "TikTok",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M15 4v9.5a3.5 3.5 0 1 1-3-3.47" />
        <path d="M15 4c0 2.2 1.8 4 4 4" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#5E5145]/10 bg-white">
      <Section className="py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-[#70703A] font-bold tracking-[0.15em]">
              CASA NELLY
            </p>
            <p className="mt-2 text-sm text-[#5E5145] leading-relaxed max-w-xs">
              Escuela de Artes Dulces. Aprende, crea y emprende con la
              Maestra Nelly.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#70703A]">Navegación</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#5E5145] hover:text-[#70703A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#70703A]">Contacto</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5E5145] hover:text-[#70703A] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CORREO_CONTACTO}`}
                  className="text-[#5E5145] hover:text-[#70703A] transition-colors"
                >
                  {CORREO_CONTACTO}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[#70703A]">Redes sociales</p>
            <div className="flex gap-3 mt-4">
              {redesSociales.map((red) => (
                <span
                  key={red.nombre}
                  title={`${red.nombre} — próximamente`}
                  aria-label={`${red.nombre} — próximamente`}
                  className="w-10 h-10 rounded-full border border-[#5E5145]/15 flex items-center justify-center text-[#5E5145]/50"
                >
                  {red.icono}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#5E5145]/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-[#5E5145]/70">
          <p>Hecho con Calma desde Casa Nelly.</p>
          <p>© {new Date().getFullYear()} Casa Nelly</p>
        </div>
      </Section>
    </footer>
  );
}
