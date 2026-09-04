import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "Custom software, websites, web platforms, mobile applications and technical consulting. If a daily task can be simplified with technology, it is something we can build.",
  },
  {
    q: "How long does a project usually take?",
    a: "A focused website takes about 2 to 4 weeks. A custom system or mobile app typically runs 6 to 12 weeks depending on scope. You get a clear timeline before we start.",
  },
  {
    q: "How is pricing decided?",
    a: "Every project is quoted individually after a free discovery call, based on scope and complexity. There are no hidden fees, and payment is split across agreed milestones.",
  },
  {
    q: "Do you support the product after launch?",
    a: "Yes. Every delivery includes a support period, and we offer ongoing maintenance and improvement plans for teams that want us to stay involved.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative bg-ink py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Questions we hear often
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-white/10 transition-colors hover:border-brand-green/40"
              >
                <AccordionTrigger className="py-6 text-left text-base font-medium text-white hover:text-brand-green hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-white/60">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
