export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white shadow-sm border border-[#5E5145]/5 ${className}`}
    >
      {children}
    </div>
  );
}
