import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyIntro() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading description="MDF lamination services for manufacturers, workshops, and project-based businesses.">
          About Arsin
        </SectionHeading>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-950">What We Do</h3>

            <p className="mt-3 leading-7 text-gray-600">
              Arsin provides MDF lamination services for furniture workshops and
              manufacturers.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-950">
              Who We Work With
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              We work with furniture manufacturers, cabinet workshops, interior
              decoration companies, and contractors.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
