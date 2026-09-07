type SectionHeadingProps = { children: React.ReactNode };

export function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="mb-10 text-center text-3xl font-bold">{children}</h2>;
}
