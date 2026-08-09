import { Link } from "@tanstack/react-router";
import { Star, Check } from "lucide-react";
import { FEATURES, TESTIMONIALS, FAQS } from "@/content/site";
import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FeatureGrid({ limit }: { limit?: number }) {
  const items = limit ? FEATURES.slice(0, limit) : FEATURES;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={i * 55}>
          <div className="group h-full rounded-xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_45px_-25px_var(--color-primary)]">
            <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-lg bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={i * 90}>
          <figure className="glass h-full rounded-xl p-6">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-lg leading-snug">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {t.name} · {t.role}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal>
        <div className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-7">
          <h3 className="font-display text-xl font-semibold">Trial</h3>
          <p className="mt-1 text-sm text-muted-foreground">Try it in your own sessions.</p>
          <p className="mt-6 font-display text-4xl font-bold">Free</p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
            {["14 days full access", "Limited functionality", "Windows & macOS", "No card required"].map(
              (x) => (
                <li key={x} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {x}
                </li>
              ),
            )}
          </ul>
          <button className="mt-7 rounded-lg border border-primary/60 px-5 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/10">
            Download Trial
          </button>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/60 bg-card p-7 glow-ember">
          <span className="absolute right-5 top-5 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            Best value
          </span>
          <h3 className="font-display text-xl font-semibold">Full Version</h3>
          <p className="mt-1 text-sm text-muted-foreground">Everything, forever.</p>
          <p className="mt-6 font-display text-4xl font-bold text-ember-gradient">€29.99</p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
            {["Lifetime license", "Free updates", "All presets included", "Commercial use"].map((x) => (
              <li key={x} className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {x}
              </li>
            ))}
          </ul>
          <button className="mt-7 rounded-lg bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]">
            Buy Now — €29.99
          </button>
        </div>
      </Reveal>
    </div>
  );
}

export function FaqList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((f) => (
        <AccordionItem key={f.q} value={f.q} className="border-border">
          <AccordionTrigger className="text-left font-display text-base hover:text-primary hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CtaBand() {
  return (
    <Reveal>
      <div className="glass relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-12">
        <div className="brick-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build massive distortion.</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            One knob from warm brick dust to total demolition. Try it free for 14 days.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/pricing"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
            >
              Buy Now
            </Link>
            <Link
              to="/pricing"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Download Trial
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Section({
  eyebrow,
  title,
  sub,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <Reveal>
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
