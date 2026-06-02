import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portafolio";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsappButton";
import { Nosotros } from "@/components/nosotros";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Nosotros />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}