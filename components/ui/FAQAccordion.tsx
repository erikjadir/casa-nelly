"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

export type FAQItem = {
  pregunta: string;
  respuesta: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Card key={item.pregunta} className="rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 font-semibold text-[#70703A]"
              aria-expanded={isOpen}
            >
              {item.pregunta}
              <span
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>
            <div
              className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[#5E5145] text-sm sm:text-base leading-relaxed">
                {item.respuesta}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
