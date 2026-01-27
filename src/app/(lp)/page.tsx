import { Gallery } from "./_sections/gallery";
import { Hero } from "./_sections/hero";
import { Presentation } from "./_sections/presentation";

export default function Home() {
  return (
    <div>
      {/* ===============================
       * HERO
       * =============================== */}
      <Hero />

      {/* ===============================
       * PRESENTATION
       * =============================== */}
      <div className="bg-primary pb-40 md:pb-48 lg:pb-24">
        <Presentation />
      </div>

      {/* ===============================
       * GALLERY
       * =============================== */}
      <Gallery />
    </div>
  );
}
