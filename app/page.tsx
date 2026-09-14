import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { Contact } from "@/components/sections/Contact";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/services/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Gallery />
      <FaqPreview />
      <Contact />
    </main>
  );
}
