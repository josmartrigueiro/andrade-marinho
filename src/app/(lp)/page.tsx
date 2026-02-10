import { ArtBoardGrid } from "@/components/art-board-grid";
import { About } from "./_sections/about";
import { CtaPresentation } from "./_sections/cta-presentation";
import { Hero } from "./_sections/hero";
import { Presentation } from "./_sections/presentation";
import { Projects } from "./_sections/projects";
import { Releases } from "./_sections/releases";
import { ScrollText } from "./_sections/scroll-text";
import { Services } from "./_sections/services";
import { Stats } from "./_sections/stats";
import { Contact } from "./_sections/contact";
import { ContactUs } from "./_sections/contact-us";

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
      <div className="-translate-y-50">
        {/* ===============================
         * ART BOARD GRID
         * =============================== */}
        <div className="relative container py-0! md:py-24! px-4 lg:px-12">
          <ArtBoardGrid />
        </div>

        {/* ===============================
         * SERVICES
         * =============================== */}
        <Services />

        {/* ===============================
         * CTA PRESENTATION
         * =============================== */}
        <CtaPresentation />

        {/* ===============================
         * RELEASES
         * =============================== */}
        <Releases />

        {/* ===============================
         * STATS
         * =============================== */}
        <Stats />

        {/* ===============================
         * ABOUT
         * =============================== */}
        <About />

        {/* ===============================
         * PROJECTS
         * =============================== */}
        <Projects />

        {/* ===============================
         * CONTACT
         * =============================== */}
        <Contact />
      </div>

      {/* ===============================
       * SCROLL TEXT
       * =============================== */}
      <ScrollText />

      {/* ===============================
       * CONTACT US (FORM)
       * =============================== */}
      <ContactUs />
    </div>
  );
}
