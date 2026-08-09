import {
  Waves,
  Flame,
  Feather,
  Scissors,
  Gauge,
  SlidersHorizontal,
  Blend,
  Volume2,
  Layers,
  FolderOpen,
  Cpu,
  MonitorSmartphone,
  Plug,
} from "lucide-react";

export const FEATURES = [
  { icon: Waves, title: "Analog Style Saturation", desc: "Warm harmonic build-up modelled on transformer iron." },
  { icon: Flame, title: "Heavy Distortion", desc: "From cracked walls to full demolition in one knob." },
  { icon: Feather, title: "Soft Clip", desc: "Smooth, musical ceilings that glue a mix together." },
  { icon: Scissors, title: "Hard Clip", desc: "Brutal transient shaping for loud, aggressive masters." },
  { icon: Gauge, title: "Drive Control", desc: "Continuous drive staging with auto gain compensation." },
  { icon: SlidersHorizontal, title: "Tone Control", desc: "Tilt the character from dark concrete to bright grit." },
  { icon: Blend, title: "Mix Knob", desc: "Parallel processing built in — dial in exactly enough." },
  { icon: Volume2, title: "Output Gain", desc: "Precise output trim so levels never surprise you." },
  { icon: Layers, title: "Oversampling", desc: "Up to 16x for alias-free extreme distortion." },
  { icon: FolderOpen, title: "Preset Browser", desc: "Hand-built presets for guitars, drums, bass and synths." },
  { icon: Cpu, title: "Ultra Low CPU", desc: "Run dozens of instances without breaking your session." },
  { icon: MonitorSmartphone, title: "Windows & macOS", desc: "Native builds for Intel, Apple Silicon and Windows." },
  { icon: Plug, title: "VST3 Support", desc: "Works in every modern VST3 host, FL Studio included." },
] as const;

export const TESTIMONIALS = [
  {
    quote: "One of the best distortion plugins I've ever used.",
    name: "Marco Reyes",
    role: "Producer, Berlin",
  },
  {
    quote: "The brick theme is amazing and the sound is even better.",
    name: "Sofia Lindqvist",
    role: "Mix Engineer",
  },
  {
    quote: "My new favorite saturation plugin.",
    name: "Dev Anand",
    role: "Beatmaker",
  },
] as const;

export const FAQS = [
  {
    q: "Does it work in FL Studio?",
    a: "Yes. Brickstortion is built and tested first in FL Studio, on both Windows and macOS, as a VST3 plugin.",
  },
  {
    q: "Does it support Ableton Live?",
    a: "Yes. Any Ableton Live version with VST3 support (Live 10.1 and newer) runs Brickstortion natively.",
  },
  {
    q: "Does it work in Cubase?",
    a: "Yes. Cubase is VST3-native, so Brickstortion loads with full automation and preset support.",
  },
  {
    q: "Is there a Mac version?",
    a: "Yes. Brickstortion ships as a universal binary for both Apple Silicon and Intel Macs.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — a 14 day trial with limited functionality (presets locked and periodic silence) so you can test it in your own projects.",
  },
  {
    q: "Can I install it on multiple computers?",
    a: "Your license covers up to 3 machines you personally own. Deactivate one from your account to free a slot.",
  },
] as const;
