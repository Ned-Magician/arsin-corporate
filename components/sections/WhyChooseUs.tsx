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
    <section className="py-20">
      <Container>
        <SectionHeading>Why Choose Arsin</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center"
            >
              <h3 className="font-semibold">{advantage}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
