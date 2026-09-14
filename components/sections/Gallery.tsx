import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/dark-matte-kitchen.webp",
    alt: "Dark matte kitchen sample",
  },
  {
    src: "/images/gallery/modern-matte-kitchen.webp",
    alt: "Modern matte kitchen sample",
  },
  {
    src: "/images/gallery/natural-wood-panel.webp",
    alt: "Natural wood panel sample",
  },
  {
    src: "/images/gallery/two-tone-wardrobe.webp",
    alt: "Two tone wardrobe sample",
  },
  {
    src: "/images/gallery/wood-tv-wall.webp",
    alt: "Wood TV wall sample",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20">
      <Container>
        <SectionHeading description="A selection of Arsin's MDF lamination work.">
          Our Work
        </SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
