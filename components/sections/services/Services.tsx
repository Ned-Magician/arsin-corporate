import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <Container>
        <div>
          <SectionHeading>Our Services</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
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
