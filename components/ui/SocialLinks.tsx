const redes = [
  { nombre: "Instagram", href: "#" },
  { nombre: "Facebook", href: "#" },
  { nombre: "TikTok", href: "#" },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {redes.map((red) => (
        <a
          key={red.nombre}
          href={red.href}
          className="px-5 py-2.5 rounded-full border border-[#70703A] text-[#70703A] font-medium hover:bg-[#70703A] hover:text-white transition"
        >
          {red.nombre}
        </a>
      ))}
    </div>
  );
}
