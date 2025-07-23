import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
