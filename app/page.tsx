import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
