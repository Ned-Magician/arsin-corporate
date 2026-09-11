import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqPreview() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeading>Frequently Asked Questions</SectionHeading>

        <div className="space-y-4">
          <details className="rounded-lg border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold">
              How much does MDF lamination cost?
            </summary>
          </details>

          <details className="rounded-lg border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold">
              How long does production take?
            </summary>
          </details>

          <details className="rounded-lg border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold">
              What is the quality like?
            </summary>
          </details>
        </div>
      </Container>
    </section>
  );
}
