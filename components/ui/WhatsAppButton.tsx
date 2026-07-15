const WHATSAPP_NUMBER = "522226301703";

export function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#70703A] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition shadow-md active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}
