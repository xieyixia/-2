import AnimatedList from "@/components/AnimatedList";
import BlurText from "@/components/BlurText";
import Ferrofluid from "@/components/Ferrofluid";

const activityItems = [
  "BlurText installed and ready for hero copy",
  "AnimatedList wired for notifications or changelogs",
  "Ferrofluid mounted as an interactive canvas backdrop",
  "Next.js + TypeScript + Tailwind v4 configured locally",
  "shadcn initialized for future registry installs",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f6f0df_0%,#d7d2c3_36%,#7f8c77_68%,#1e2d27_100%)] px-6 py-8 text-neutral-950 sm:px-8 lg:px-12">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f1e8]/80 p-8 shadow-[0_30px_100px_rgba(13,24,18,0.18)] backdrop-blur md:p-12">
          <div className="absolute inset-0 opacity-85">
            <Ferrofluid
              colors={["#17352d", "#6e8b6b", "#d6b562"]}
              speed={0.35}
              scale={1.25}
              turbulence={0.55}
              fluidity={0.08}
              rimWidth={0.18}
              sharpness={3.4}
              shimmer={0.8}
              glow={1.7}
              opacity={0.88}
              mouseStrength={0.55}
              mouseRadius={0.22}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,241,232,0.92),rgba(245,241,232,0.42)_40%,rgba(23,53,45,0.1)_100%)]" />

          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex rounded-full border border-black/10 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-neutral-600">
                React Bits Demo
              </p>

              <BlurText
                text="Three installed components, one working landing page."
                animateBy="words"
                direction="top"
                delay={110}
                stepDuration={0.28}
                className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-7xl"
              />

              <p className="max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
                This page uses <span className="font-semibold text-neutral-950">Ferrofluid</span> as
                the interactive background layer, <span className="font-semibold text-neutral-950">BlurText</span>{" "}
                for the hero entrance, and <span className="font-semibold text-neutral-950">AnimatedList</span>{" "}
                for the activity panel on the right.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.5rem] border border-black/10 bg-white/65 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Text</p>
                <p className="mt-3 text-lg font-medium text-neutral-950">BlurText</p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  Hero headlines, subheads, or any staged reveal copy.
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-black/10 bg-white/65 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">List</p>
                <p className="mt-3 text-lg font-medium text-neutral-950">AnimatedList</p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  Notification feeds, updates, comments, or status streams.
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-black/10 bg-white/65 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Background</p>
                <p className="mt-3 text-lg font-medium text-neutral-950">Ferrofluid</p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  Motion-heavy canvas atmosphere for hero sections and showcases.
                </p>
              </article>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-[2rem] border border-black/10 bg-[#10211d] p-6 text-white shadow-[0_30px_100px_rgba(13,24,18,0.28)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Live Panel</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Installed components</h2>
              </div>
              <div className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/60">
                Ready
              </div>
            </div>

            <AnimatedList
              items={activityItems}
              initialSelectedIndex={0}
              className="w-full"
              itemClassName="border border-white/8 bg-white/6 transition-colors duration-200 hover:bg-white/10"
            />
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f5f1e8]/75 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Install Commands</p>
            <div className="mt-4 space-y-3 font-mono text-sm text-neutral-800">
              <code className="block rounded-2xl bg-black/[0.04] px-4 py-3">
                npx shadcn@latest add @react-bits/BlurText-TS-TW
              </code>
              <code className="block rounded-2xl bg-black/[0.04] px-4 py-3">
                npx shadcn@latest add @react-bits/AnimatedList-TS-TW
              </code>
              <code className="block rounded-2xl bg-black/[0.04] px-4 py-3">
                npx shadcn@latest add @react-bits/Ferrofluid-TS-TW
              </code>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
