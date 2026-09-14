type SectionHeadingProps = {
  children: React.ReactNode;
  description?: string;
};

export function SectionHeading({ children, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {children}
      </h2>

      {description && (
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
