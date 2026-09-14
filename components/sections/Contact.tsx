import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-16 text-white sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Arsin
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Contact our team for quotations and business inquiries.
          </p>

          <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8">
            <p className="text-sm text-gray-400">
              Contact information will be added here once the business details
              are confirmed.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
