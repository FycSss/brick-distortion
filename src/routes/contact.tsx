import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { MessageCircle, Youtube, Instagram, Twitter } from "lucide-react";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brickstortion Support" },
      {
        name: "description",
        content:
          "Get support for Brickstortion, ask about licensing, or reach the team on Discord, YouTube, Instagram and X.",
      },
      { property: "og:title", content: "Contact — Brickstortion" },
      { property: "og:description", content: "Support, licensing and press enquiries." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const SOCIALS = [
  { icon: MessageCircle, label: "Discord", href: "https://discord.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com" },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <Section
      eyebrow="Contact"
      title="Talk to the builders"
      sub="Support replies within one business day."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Reveal>
          <form
            className="glass space-y-4 rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget));
              const parsed = schema.safeParse(data);
              if (!parsed.success) {
                const next: Record<string, string> = {};
                for (const issue of parsed.error.issues) {
                  next[String(issue.path[0])] = issue.message;
                }
                setErrors(next);
                return;
              }
              setErrors({});
              e.currentTarget.reset();
              toast.success("Message sent — we'll get back to you shortly.");
            }}
          >
            {(
              [
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "subject", label: "Subject", type: "text" },
              ] as const
            ).map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
                {errors[f.name] && (
                  <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>
                )}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              {errors["message"] && (
                <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] glow-ember"
            >
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 truncate text-sm font-medium">{s.label}</span>
              </a>
            ))}
            <div className="rounded-xl border border-border bg-card/50 px-5 py-4 text-sm text-muted-foreground">
              support@brickstortion.audio
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
