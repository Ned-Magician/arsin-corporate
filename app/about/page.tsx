import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading description="MDF lamination services for manufacturers, workshops, and business customers.">
            About Arsin
          </SectionHeading>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-950">
                What We Do
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Arsin provides MDF lamination services using industrial pressing
                equipment.
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-950">
                Who We Work With
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                We work with furniture manufacturers, cabinet workshops,
                interior decoration companies, and contractors.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              Customer Materials
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
