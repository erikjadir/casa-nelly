"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATARIO = process.env.CONTACT_EMAIL_TO || "nellyelizabethleon@gmail.com";
const REMITENTE = "Casa Nelly <onboarding@resend.dev>";

export type EstadoEnvio =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function enviarMensajeContacto(
  _prevState: EstadoEnvio,
  formData: FormData
): Promise<EstadoEnvio> {
  // Honeypot: campo oculto para personas, que los bots suelen rellenar automáticamente.
  if (formData.get("empresa")) {
    return { status: "success" };
  }

  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const tipo = formData.get("tipo");
  const mensaje = formData.get("mensaje");

  if (
    typeof nombre !== "string" ||
    !nombre.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof mensaje !== "string" ||
    !mensaje.trim()
  ) {
    return { status: "error", message: "Falta el nombre, el correo o el mensaje." };
  }

  const etiquetaTipo = tipo === "sugerencia" ? "Sugerencia" : "Felicitación";
  const fechaEnvio = new Date().toLocaleString("es-MX", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Mexico_City",
  });

  const { error } = await resend.emails.send({
    from: REMITENTE,
    to: DESTINATARIO,
    replyTo: email,
    subject: "🌸 Nuevo mensaje desde Casa Nelly",
    text: `Nombre: ${nombre}\nCorreo: ${email}\nAsunto: ${etiquetaTipo}\nFecha de envío: ${fechaEnvio}\n\nMensaje:\n${mensaje}`,
  });

  if (error) {
    return {
      status: "error",
      message: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
    };
  }

  return { status: "success" };
}
