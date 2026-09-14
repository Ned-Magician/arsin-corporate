import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export default function FaqPage() {
  return (
    <main>
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <SectionHeading description="Answers to common questions about working with Arsin.">
            Frequently Asked Questions
          </SectionHeading>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
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
    </main>
  );
}
