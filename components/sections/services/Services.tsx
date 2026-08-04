import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section>
      <Container>
        <div>
          <h2>Our Services</h2>

          <ServiceCard
            title="Decorative MDF Lamination"
            description="We laminate MDF panels using your decorative paper or available workshop designs."
          />

          <ServiceCard
            title="Customer Decorative Papers"
            description="Bring your own decorative paper or choose from available patterns in our workshop."
          />

          <ServiceCard
            title="Standard Panel Sizes"
            description="We laminate standard panel sizes with consistent quality and precision."
          />
        </div>
      </Container>
    </section>
  );
}
