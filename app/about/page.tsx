import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading description="MDF lamination services for manufacturers and workshops.">
          About Arsin
        </SectionHeading>

        <div className="mx-auto max-w-3xl space-y-8">
          <section>
            <h2 className="mb-3 text-xl font-semibold">What We Do</h2>
            <p className="text-gray-600">
              Arsin provides MDF lamination services using industrial pressing
              equipment.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Who We Work With</h2>
            <p className="text-gray-600">
              We work with furniture manufacturers, cabinet workshops, interior
              decoration companies, and contractors.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Customer Materials</h2>
            <p className="text-gray-600">
              Customers provide the MDF panels for processing and, when
              required, can also provide decorative paper.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
