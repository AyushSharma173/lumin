import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              World‑class AI agents for real‑world work
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-500">
              Lumin builds autonomous agents, RL environments, and production inference infra to tackle
              high‑stakes, real‑world tasks. We engineer systems that learn, adapt, and deliver.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                Book a demo
              </Link>
              <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
                Read the research blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Autonomous agents</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Tool‑use, planning, and safety‑aware execution for enterprise workflows and on‑device tasks.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">RL environments</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Customizable simulators to close the sim‑to‑real gap with human‑level evaluation suites.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Inference infra</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Scalable orchestration, caching, and observability to ship reliable agent applications.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">From research to reality</h2>
            <p className="mt-4 text-zinc-500">
              We combine cutting‑edge research with robust engineering to deploy agents that operate
              safely in complex environments. Our systems are measurable, debuggable, and upgradeable.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="/about" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Latency p95</div>
                <div className="mt-2 text-2xl font-semibold">120 ms</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Task success</div>
                <div className="mt-2 text-2xl font-semibold">+34%</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Cost / run</div>
                <div className="mt-2 text-2xl font-semibold">−41%</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Safety incidents</div>
                <div className="mt-2 text-2xl font-semibold">0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">From the blog</h2>
          <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ArticleCard href="/blog/hello-lumin" title="Introducing Lumin" excerpt="Agents, RL, and infra for real‑world tasks." />
          <ArticleCard href="/blog/rl-environments" title="Designing RL environments that transfer" excerpt="Closing the sim‑to‑real gap." />
          <ArticleCard href="/blog/agent-evals" title="Evaluating tool‑use agents" excerpt="Benchmarks that actually correlate with outcomes." />
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ href, title, excerpt }: { href: string; title: string; excerpt: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 dark:bg-black/40">
      <h3 className="text-lg font-semibold group-hover:underline group-hover:underline-offset-4">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500">{excerpt}</p>
    </Link>
  );
}
