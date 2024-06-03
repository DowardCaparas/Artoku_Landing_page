import { Advantages, Founder, Hero, IncreaseWealth, MentoringProgram, Mentors, Navbar } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      <Navbar />

        <section>
          <Hero />
        </section>

        <section>
          <MentoringProgram />
        </section>

        <section>
          <Advantages />
        </section>

        <section>
          <Founder />
        </section>

        <section>
          <Mentors />
        </section>

        <section>
          <IncreaseWealth />
        </section>

      <Footer />
        
    </main>
  );
}
