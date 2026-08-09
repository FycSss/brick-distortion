import { createFileRoute } from "@tanstack/react-router";
import { PricingCards, Section, Testimonials, FaqList } from "@/components/site/Sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Brickstortion €29.99 Lifetime License" },
      {
        name: "description",
        content:
          "Free 14 day trial or €29.99 for a lifetime Brickstortion license with free updates, all presets and commercial use.",
      },
      { property: "og:title", content: "Pricing — Brickstortion" },
      { property: "og:description", content: "Free trial or €29.99 lifetime license." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Section
        eyebrow="Pricing"
        title="One price. Yours forever."
        sub="No subscription, no dongle, no nonsense."
      >
        <PricingCards />
      </Section>
      <Section eyebrow="Testimonials" title="Trusted by producers">
        <Testimonials />
      </Section>
      <Section eyebrow="FAQ" title="Before you buy">
        <div className="max-w-3xl">
          <FaqList />
        </div>
      </Section>
    </>
  );
}
