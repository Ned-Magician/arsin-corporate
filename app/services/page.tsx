import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading description="MDF lamination services for workshops, manufacturers, and business customers.">
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

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              Customer-Supplied Materials
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Customers provide the MDF panels for processing and, when
              required, can also provide decorative paper.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
