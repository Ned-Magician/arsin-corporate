import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/contact";

export function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-16 text-white sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Arsin
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
              Contact our team for quotations and business inquiries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="font-semibold text-white">Phone</h3>

              <a
                href={contactInfo.phoneHref}
                className="mt-2 inline-block text-gray-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="font-semibold text-white">Email</h3>

              <a
                href={contactInfo.emailHref}
                className="mt-2 inline-block text-gray-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="font-semibold text-white">Location</h3>

              <p className="mt-2 text-gray-300">{contactInfo.location}</p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="font-semibold text-white">Business Hours</h3>

              <p className="mt-2 text-gray-300">{contactInfo.businessHours}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
