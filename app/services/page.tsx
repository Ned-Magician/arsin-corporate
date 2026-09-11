import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading description="MDF lamination services for workshops and manufacturers.">
          Our Services
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
