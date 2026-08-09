import { useState } from "react";
import { cn } from "@/lib/utils";

function Knob({ label, value, readout }: { label: string; value: number; readout: string }) {
  const start = 135;
  const sweep = 270;
  const r = 34;
  const c = 2 * Math.PI * r;
  const arc = (sweep / 360) * c;
  const filled = arc * value;
  const angle = start + sweep * value;
  const rad = (angle * Math.PI) / 180;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="oklch(0.32 0.02 220)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${arc} ${c}`}
            transform="rotate(45 40 40)"
          />
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${c}`}
            transform="rotate(45 40 40)"
            className="drop-shadow-[0_0_6px_var(--color-primary)]"
          />
        </svg>
        <span
          className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
          style={{
            left: `${40 + r * Math.cos(rad) - 6}px`,
            top: `${40 + r * Math.sin(rad) - 6}px`,
          }}
        />
      </div>
      <div className="rounded-sm bg-[oklch(0.24_0.01_250)] px-3 py-1 font-mono text-[11px] text-foreground/80">
        {readout}
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function PluginMockup({ className }: { className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className={cn("[perspective:1400px]", className)}
      onMouseMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((e.clientY - b.top) / b.height - 0.5) * -10,
          y: ((e.clientX - b.left) / b.width - 0.5) * 14,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="rounded-xl border border-[oklch(0.34_0.02_250)] bg-[oklch(0.2_0.015_250)] shadow-[0_40px_120px_-40px_oklch(0.68_0.19_45/0.55)] transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* title bar */}
        <div className="flex items-center justify-between rounded-t-xl border-b border-[oklch(0.3_0.02_250)] bg-[oklch(0.24_0.015_250)] px-3 py-2">
          <span className="text-[11px] text-muted-foreground">Brickstortion (Master)</span>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.4_0.02_250)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.4_0.02_250)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="space-y-5 p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold tracking-[0.06em] sm:text-2xl">BRICKSTORTION</h3>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-sm border border-primary text-primary">
                  ✓
                </span>
                Distortion
              </span>
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-sm border border-border" />
                Goofy
              </span>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Brick Drive
            </span>
            <div className="mt-2 rounded-md border border-[oklch(0.3_0.02_250)] bg-[oklch(0.24_0.012_250)] p-4">
              <div className="relative h-16">
                <div className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 rounded-sm bg-[oklch(0.28_0.012_250)]" />
                <div className="absolute left-[26%] top-0 animate-float">
                  <div className="grid h-12 w-16 grid-cols-3 grid-rows-2 gap-1 rounded-[3px] bg-primary p-1.5 shadow-[0_0_28px_-4px_var(--color-primary)]">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span key={i} className="rounded-[1px] bg-primary-foreground/25" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Knob label="Drive" value={0.5} readout="0.500" />
            <Knob label="Mix" value={0.98} readout="100%" />
            <Knob label="Tone" value={0.42} readout="0.00 dB" />
            <Knob label="Output" value={0.5} readout="0.500" />
          </div>

          <div className="hazard-stripes h-2 rounded-sm opacity-70" />
        </div>
      </div>
    </div>
  );
}
