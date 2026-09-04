import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { SideRail } from "@/components/site/SideRail";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Iwacu Tech — Apps & Software Solutions in Burundi";
const description =
  "Iwacu Tech builds custom software, websites and mobile apps that solve everyday problems for businesses in Bujumbura and beyond.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />
      <SideRail />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <About />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
