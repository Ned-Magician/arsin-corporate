import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const questions = [
  "How much does MDF lamination cost?",
  "How long does production take?",
  "What is the quality like?",
];

export default function FaqPage() {
  return (
    <main>
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <SectionHeading description="Common questions customers ask before starting a project.">
            Frequently Asked Questions
          </SectionHeading>

          <div className="mx-auto max-w-3xl space-y-4">
            {questions.map((question) => (
              <div
                key={question}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="font-semibold text-gray-950">{question}</h2>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
