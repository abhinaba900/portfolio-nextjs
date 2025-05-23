import Hero from "@/src/components/hero";
import About from "@/src/components/about";
import Projects from "@/src/components/projects";
import Contact from "@/src/components/contact";
import Footer from "@/src/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
