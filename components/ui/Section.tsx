export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}
