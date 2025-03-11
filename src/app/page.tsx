import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Scills from "../../components/Scills/Scills";
import Works from "../../components/Works/Works";

export default function Home() {
  return (
       <main>
          <Hero />
          <About />
          <Scills />
          <Works />
       </main>
  );
}
