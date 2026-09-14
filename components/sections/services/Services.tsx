import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <SectionHeading description="MDF lamination services for workshops and manufacturers.">
          Our Services
        </SectionHeading>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
