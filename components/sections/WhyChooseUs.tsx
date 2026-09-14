import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const advantages = [
  "Competitive pricing",
  "Industrial machinery",
  "Nationwide service",
  "Experience",
];

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <SectionHeading description="Key advantages Arsin brings to business customers.">
          Why Choose Arsin
        </SectionHeading>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <article
              key={advantage}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                {index + 1}
              </div>

              <h3 className="mt-4 font-semibold text-gray-950">{advantage}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
