type SectionHeadingProps = {
  children: React.ReactNode;
  description?: string;
};

export function SectionHeading({ children, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold">{children}</h2>

      {description && <p className="mt-3 text-gray-600">{description}</p>}
    </div>
  );
}
