export function Card({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`bg-white shadow-sm border border-[#5E5145]/5 ${className}`}
    >
      {children}
    </div>
  );
}
