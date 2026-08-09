import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

const SOURCES = ["Guitar", "Drums", "Bass", "Synth"] as const;

const BARS: Record<string, number[]> = {
  Guitar: [0.3, 0.6, 0.45, 0.8, 0.5, 0.35, 0.7, 0.55, 0.4, 0.65, 0.3, 0.5],
  Drums: [0.9, 0.2, 0.45, 0.95, 0.25, 0.4, 0.85, 0.3, 0.5, 0.9, 0.2, 0.4],
  Bass: [0.5, 0.55, 0.6, 0.5, 0.65, 0.6, 0.45, 0.7, 0.55, 0.5, 0.6, 0.5],
  Synth: [0.4, 0.75, 0.35, 0.6, 0.8, 0.45, 0.7, 0.9, 0.4, 0.6, 0.75, 0.5],
};

export function SoundDemo() {
  const [source, setSource] = useState<(typeof SOURCES)[number]>("Guitar");
  const [processed, setProcessed] = useState(true);
  const [playing, setPlaying] = useState(false);

  const bars = BARS[source] ?? [];

  return (
    <div className="glass rounded-2xl p-5 sm:p-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <div className="flex min-w-0 flex-wrap gap-2">
          {SOURCES.map((s) => (
            <button
              key={s}
              onClick={() => setSource(s)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-all duration-200",
                source === s
                  ? "border-primary bg-primary/15 text-primary glow-ember"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex shrink-0 rounded-full border border-border p-1 text-xs">
          <button
            onClick={() => setProcessed(false)}
            className={cn(
              "rounded-full px-3 py-1 transition-colors",
              !processed ? "bg-secondary text-foreground" : "text-muted-foreground",
            )}
          >
            Before
          </button>
          <button
            onClick={() => setProcessed(true)}
            className={cn(
              "rounded-full px-3 py-1 transition-colors",
              processed ? "bg-primary text-primary-foreground" : "text-muted-foreground",
            )}
          >
            After
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 sm:gap-6">
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause demo" : "Play demo"}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 hover:scale-105 glow-ember"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
        </button>
        <div className="flex h-24 min-w-0 flex-1 items-center gap-1 sm:gap-1.5">
          {bars.map((b, i) => {
            const h = processed ? Math.min(1, b * 1.55) : b * 0.8;
            return (
              <span
                key={i}
                className={cn(
                  "flex-1 rounded-sm transition-all duration-500",
                  processed ? "bg-primary/80" : "bg-muted-foreground/45",
                  playing && "animate-pulse-glow",
                )}
                style={{ height: `${h * 100}%`, animationDelay: `${i * 90}ms` }}
              />
            );
          })}
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {processed
          ? `${source} through Brickstortion — analog saturation, drive at 60%, oversampling 4x.`
          : `${source} dry signal, no processing.`}
      </p>
    </div>
  );
}
