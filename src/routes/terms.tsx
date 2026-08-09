import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Brickstortion" },
      {
        name: "description",
        content:
          "License terms, permitted use and limitations for the Brickstortion distortion plugin.",
      },
      { property: "og:title", content: "Terms of Service — Brickstortion" },
      { property: "og:description", content: "License terms and permitted use." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms of Service"
      updated="Last updated: August 2026"
      sections={[
        {
          h: "License grant",
          p: "Purchasing Brickstortion grants you a perpetual, non-exclusive license to install the plugin on up to three machines you personally own, for personal and commercial music production.",
        },
        {
          h: "Restrictions",
          p: "You may not resell, redistribute, reverse engineer or share your license key. Licenses found in public circulation are deactivated.",
        },
        {
          h: "Updates",
          p: "All 1.x and future major updates are included free of charge for lifetime license holders.",
        },
        {
          h: "Liability",
          p: "The software is provided as is. We are not liable for data loss or damages arising from its use.",
        },
      ]}
    />
  ),
});
