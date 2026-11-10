import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr Cyrilkumaar Vijayakumar",
  jobTitle: "Clinical AI Fellow",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com/in/cyrilvijayakumar"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Sheffield" },
    { "@type": "CollegeOrUniversity", name: "London School of Economics" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
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
