import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqPreview() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <SectionHeading description="Common questions customers usually ask before starting a project.">
          Frequently Asked Questions
        </SectionHeading>

        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none font-semibold text-gray-950">
              How much does MDF lamination cost?
            </summary>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none font-semibold text-gray-950">
              How long does production take?
            </summary>
          </details>

          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none font-semibold text-gray-950">
              What is the quality like?
            </summary>
          </details>
        </div>
      </Container>
    </section>
  );
}
