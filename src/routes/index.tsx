import { createFileRoute, Link } from "@tanstack/react-router";
import brickWall from "@/assets/brick-wall.jpg";
import { PluginMockup } from "@/components/site/PluginMockup";
import { SoundDemo } from "@/components/site/SoundDemo";
import {
  FeatureGrid,
  Testimonials,
  PricingCards,
  FaqList,
  CtaBand,
  Section,
} from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brickstortion — Build Massive Distortion | VST3 Plugin" },
      {
        name: "description",
        content:
          "Brick-built analog saturation and heavy distortion for FL Studio, Ableton and Cubase. VST3, Windows & macOS, €29.99 lifetime.",
      },
      { property: "og:title", content: "Brickstortion — Build Massive Distortion" },
      {
        property: "og:description",
        content: "Analog saturation and heavy distortion VST3 for Windows & macOS.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={brickWall}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="animate-sweep pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_70%_20%,color-mix(in_oklab,var(--color-primary)_28%,transparent),transparent_70%)]" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute bottom-10 h-1 w-1 rounded-full bg-primary/70"
          style={{
            left: `${(i * 7 + 5) % 96}%`,
            animation: `dust ${9 + (i % 5) * 2}s linear ${i * 0.8}s infinite`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
            VST3 · Windows & macOS · v1.0
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-7xl">
            <span className="text-ember-gradient">BRICKSTORTION</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 font-display text-2xl text-foreground/90 sm:text-3xl">
            Build Massive Distortion.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Analog-style saturation, brutal clipping and surgical tone shaping — wrapped in a plugin
            made of bricks.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/pricing"
              className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 glow-ember"
            >
              Buy Now
            </Link>
            <a
              href="#demo-video"
              className="rounded-lg border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Watch Demo
            </a>
            <Link
              to="/pricing"
              className="rounded-lg border border-primary/50 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Download Trial
            </Link>
          </div>
        </Reveal>

        <Reveal delay={380} className="mt-16">
          <PluginMockup className="mx-auto max-w-3xl" />
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Features"
        title="Everything you need to wreck a signal"
        sub="Thirteen tools engineered for tone, not just noise."
        id="features"
      >
        <FeatureGrid />
      </Section>

      <Section
        eyebrow="Sound demo"
        title="Hear the wall"
        sub="A/B the dry signal against Brickstortion on four sources."
        id="demo"
      >
        <SoundDemo />
      </Section>

      <Section eyebrow="Video" title="See Brickstortion in Action" id="demo-video">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border glow-ember">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Brickstortion walkthrough"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Testimonials" title="What producers say">
        <Testimonials />
      </Section>

      <Section eyebrow="Pricing" title="Two ways in" id="pricing">
        <PricingCards />
      </Section>

      <Section eyebrow="FAQ" title="Questions, answered">
        <div className="max-w-3xl">
          <FaqList />
        </div>
      </Section>

      <div className="mx-auto max-w-6xl px-5 pb-24">
        <CtaBand />
      </div>
    </>
  );
}
