import { Reveal } from "./Reveal";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <Reveal>
        <h1 className="font-display text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{updated}</p>
      </Reveal>
      <div className="mt-10 space-y-8">
        {sections.map((s, i) => (
          <Reveal key={s.h} delay={i * 70}>
            <h2 className="font-display text-xl font-semibold">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
