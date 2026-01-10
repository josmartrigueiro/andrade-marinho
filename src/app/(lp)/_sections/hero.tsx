import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden z-0">
      <Image
        src="/privilegi/praca-caramanchao.jpg"
        alt="Praça do Caramanchão"
        fill
        priority
        quality={100}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
