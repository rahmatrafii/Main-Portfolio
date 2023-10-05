import { Contact, Home, Portfolio, Skills } from "@/sections";
import About from "@/sections/About";

export default function MainPage() {
  return (
    <main className={`main-container `}>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
