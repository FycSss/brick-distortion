import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Brickstortion" },
      {
        name: "description",
        content:
          "How Brickstortion collects, stores and protects your account, licensing and payment data.",
      },
      { property: "og:title", content: "Privacy Policy — Brickstortion" },
      { property: "og:description", content: "How we handle your data." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: August 2026"
      sections={[
        {
          h: "What we collect",
          p: "We store your name, email address, license keys and order history. Payment details are handled by our payment processor and never touch our servers.",
        },
        {
          h: "How we use it",
          p: "Your data is used to deliver downloads, validate licenses, send product updates you opted into, and provide support.",
        },
        {
          h: "Sharing",
          p: "We never sell your data. We share only what is required with our payment processor and email delivery provider.",
        },
        {
          h: "Your rights",
          p: "You may request export or deletion of your account data at any time by contacting support@brickstortion.audio.",
        },
      ]}
    />
  ),
});
