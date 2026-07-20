export const WHATSAPP_NUMBER = "522226301703";

export function WhatsAppButton({
  children,
  className = "",
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  const href = message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#70703A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition shadow-md active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}
