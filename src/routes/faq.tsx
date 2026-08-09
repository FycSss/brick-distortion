import { createFileRoute } from "@tanstack/react-router";
import { FaqList, Section, CtaBand } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Brickstortion Compatibility & Licensing" },
      {
        name: "description",
        content:
          "Does Brickstortion work in FL Studio, Ableton or Cubase? Is there a Mac version or a free trial? All answers here.",
      },
      { property: "og:title", content: "FAQ — Brickstortion" },
      { property: "og:description", content: "Compatibility, licensing and trial questions." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
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
