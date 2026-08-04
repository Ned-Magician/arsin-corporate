import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl font-bold text-center">
            Professional Decorative MDF Lamination
          </h1>
          <p className="max-w-2xl text-gray-600 text-center">
            We laminate your MDF panels using your decorative paper or available
            designs, delivering consistent quality for furniture manufacturers
            across Iran.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary">Contact on WhatsApp</Button>
            <Button variant="secondary">View Gallery</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
