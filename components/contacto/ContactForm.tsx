"use client";

import { useActionState } from "react";
import { enviarMensajeContacto, type EstadoEnvio } from "@/app/contacto/actions";

const estadoInicial: EstadoEnvio = { status: "idle" };

export function ContactForm() {
  const [estado, action, pending] = useActionState(enviarMensajeContacto, estadoInicial);

  return (
    <form action={action} className="flex flex-col gap-4">
      {/* Honeypot: oculto para personas, visible para bots. No usar type="hidden" (algunos bots lo ignoran). */}
      <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="empresa">No llenar este campo</label>
        <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-[#5E5145] mb-1">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-xl border border-[#5E5145]/20 px-4 py-3 text-[#5E5145] focus:outline-none focus:border-[#70703A]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#5E5145] mb-1">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-[#5E5145]/20 px-4 py-3 text-[#5E5145] focus:outline-none focus:border-[#70703A]"
        />
      </div>

      <div>
        <label htmlFor="tipo" className="block text-sm font-medium text-[#5E5145] mb-1">
          Tipo de mensaje
        </label>
        <select
          id="tipo"
          name="tipo"
          className="w-full rounded-xl border border-[#5E5145]/20 px-4 py-3 text-[#5E5145] focus:outline-none focus:border-[#70703A]"
        >
          <option value="felicitacion">Felicitación</option>
          <option value="sugerencia">Sugerencia</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-[#5E5145] mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className="w-full rounded-xl border border-[#5E5145]/20 px-4 py-3 text-[#5E5145] focus:outline-none focus:border-[#70703A]"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="self-start bg-[#70703A] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Enviando…" : "Enviar"}
      </button>

      {estado.status === "success" && (
        <p className="text-sm text-[#70703A]">
          ¡Gracias por tu mensaje! Lo leeremos pronto.
        </p>
      )}
      {estado.status === "error" && (
        <p className="text-sm text-red-600">{estado.message}</p>
      )}
    </form>
  );
}
