export function TypographyP({ children }: { children: React.ReactNode }) {
  return (
    <p className=" font-medium text-lg [&:not(:first-child)]:mt-6 text-slate-900">
      {children}
    </p>
  );
}
