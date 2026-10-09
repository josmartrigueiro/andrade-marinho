import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import styles from "./legal.module.css";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.legal}>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 py-7">
          <Link href="/" aria-label="Andrade Marinho — página inicial">
            <Image
              src="/logo-blue.png"
              alt="Andrade Marinho"
              width={280}
              height={80}
              className="h-auto w-48"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-primary underline underline-offset-4"
          >
            Voltar ao site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <article className={styles.document}>{children}</article>
        <nav
          aria-label="Documentos do Portal do Cliente"
          className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6 text-sm text-primary underline underline-offset-4"
        >
          <Link href="/termos-de-uso">Termos de Uso</Link>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
