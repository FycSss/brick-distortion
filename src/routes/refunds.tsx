import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Brickstortion" },
      {
        name: "description",
        content:
          "Our 14 day refund policy for Brickstortion, including how to request a refund and what happens to your license.",
      },
      { property: "og:title", content: "Refund Policy — Brickstortion" },
      { property: "og:description", content: "14 day refunds, no questions asked." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Refund Policy"
      updated="Last updated: August 2026"
      sections={[
        {
          h: "14 day guarantee",
          p: "If Brickstortion is not for you, request a full refund within 14 days of purchase. No questions asked.",
        },
        {
          h: "How to request",
          p: "Email support@brickstortion.audio from your purchase address with your order number. Refunds are processed within 5 business days.",
        },
        {
          h: "License deactivation",
          p: "Refunded license keys are deactivated and the plugin stops authorising on your machines.",
        },
        {
          h: "Try before you buy",
          p: "The free 14 day trial exists so you can test compatibility with your DAW before purchasing.",
        },
      ]}
    />
  ),
});
