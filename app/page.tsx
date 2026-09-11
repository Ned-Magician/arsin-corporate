import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/services/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FaqPreview } from "@/components/sections/FaqPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <Services />
      <HowItWorks />
      <Gallery />
      <FaqPreview />
      <Contact />
    </main>
  );
}
