import { createFileRoute } from "@tanstack/react-router";
import { FeatureGrid, Section, CtaBand } from "@/components/site/Sections";
import { PluginMockup } from "@/components/site/PluginMockup";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Brickstortion Distortion Plugin" },
      {
        name: "description",
        content:
          "Analog saturation, soft and hard clipping, drive, tone, mix, oversampling up to 16x and a preset browser — all inside Brickstortion.",
      },
      { property: "og:title", content: "Features — Brickstortion" },
      {
        property: "og:description",
        content: "Every tool inside the brick-built distortion plugin.",
      },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <>
      <Section
        eyebrow="Features"
        title="Built brick by brick"
        sub="A full distortion workstation in one lightweight VST3."
      >
        <FeatureGrid />
      </Section>
      <Section eyebrow="Interface" title="The plugin">
        <Reveal>
          <PluginMockup className="mx-auto max-w-3xl" />
        </Reveal>
      </Section>
      <div className="mx-auto max-w-6xl px-5 pb-24">
        <CtaBand />
      </div>
    </>
  );
}
