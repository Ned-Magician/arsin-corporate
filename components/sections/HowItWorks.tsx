import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeading>How It Works</SectionHeading>

        <ol className="grid gap-6 md:grid-cols-3">
          <li className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">1. Provide MDF Panels</h3>
            <p className="text-gray-600">
              Customers provide the MDF panels that need lamination.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">2. Provide Decorative Paper</h3>
            <p className="text-gray-600">
              When required, customers can also provide their decorative paper.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">3. Lamination</h3>
            <p className="text-gray-600">
              Arsin laminates the supplied materials using industrial pressing
              equipment.
            </p>
          </li>
        </ol>
      </Container>
    </section>
  );
}
