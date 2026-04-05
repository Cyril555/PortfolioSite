import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import CaseStudies from "@/components/CaseStudies";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav mode="home" />
      <Hero />
      <Domains />
      <CaseStudies />
      <Credentials />
      <Contact />
      <Footer />
    </>
  );
}
