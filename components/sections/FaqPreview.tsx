import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export function FaqPreview() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <SectionHeading description="Common questions customers ask before starting a project.">
          Frequently Asked Questions
        </SectionHeading>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.slice(0, 3).map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-gray-950">
                {faq.question}
              </summary>

              <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
