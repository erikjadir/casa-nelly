import { Card } from "@/components/ui/Card";
import { historiasEjemplo } from "@/content/historias";

export function HistoriasSection() {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#70703A]">
        🌸 Historias que inspiran
      </h2>
      <p className="mt-3 text-[#5E5145] max-w-xl leading-relaxed">
        Experiencias reales de alumnas y clientas que aprendieron, crearon y emprendieron con Casa Nelly.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {historiasEjemplo.map((historia) => (
          <Card key={historia.nombre} className="rounded-3xl p-6">
            <p className="text-[#5E5145] leading-relaxed">&ldquo;{historia.mensaje}&rdquo;</p>
            <p className="mt-4 font-semibold text-[#70703A]">
              {historia.nombre}
              {historia.ciudad && (
                <span className="font-normal text-[#5E5145]"> · {historia.ciudad}</span>
              )}
            </p>
            {historia.fecha && (
              <p className="text-xs text-[#5E5145]/70 mt-1">{historia.fecha}</p>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#formulario"
          className="inline-flex items-center gap-2 bg-[#70703A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition shadow-md active:scale-95"
        >
          💌 Comparte tu historia
        </a>
      </div>
    </>
  );
}
