import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portafolio";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsappButton";

export default function Home() {
  return (
    <main className="bg-[#32a852]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}