import { Container } from "@/components/ui/Container";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Decorative MDF Lamination",
    description:
      "We laminate MDF panels using your decorative paper or available workshop designs.",
  },
  {
    title: "Customer Decorative Papers",
    description:
      "Bring your own decorative paper or choose from available patterns in our workshop.",
  },
  {
    title: "Standard Panel Sizes",
    description:
      "We laminate standard panel sizes with consistent quality and precision.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <Container>
        <div>
          <SectionHeading>Our Services</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
