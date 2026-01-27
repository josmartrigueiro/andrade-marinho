"use client";

import { ArtBoardGrid } from "@/components/art-board-grid";
import { Services } from "./services";

export function Gallery() {
  return (
    <section className="relative container -translate-y-50 px-4 pb-16 lg:px-12">
      <ArtBoardGrid />
      <Services />
    </section>
  );
}
