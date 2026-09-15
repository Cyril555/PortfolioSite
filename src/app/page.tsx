import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav mode="home" />
      <Hero />
      <Highlights />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
    </>
  );
}
