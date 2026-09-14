type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8">
      <h3 className="text-xl font-semibold text-gray-950">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </article>
  );
}
