import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              Long horizon agents with human‑in‑the‑loop training infrastructure
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-500">
              Lumin puts cutting‑edge AI agent research into practice through systematic ablations, 
              domain‑specific evaluations, and latest methodologies. We build training infrastructure 
              that enables human feedback loops for complex, long‑term tasks.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                Book a demo
              </Link>
              <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
                Read our research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Research‑driven development</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Systematic ablations and controlled studies to validate latest techniques before deployment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Human‑in‑the‑loop training</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Infrastructure for collecting, processing, and incorporating human feedback into long‑horizon agent learning.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Domain‑specific evaluation</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Custom benchmarks and evaluation suites that correlate with real‑world performance and user value.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">From research papers to production</h2>
            <p className="mt-4 text-zinc-500">
              We bridge the gap between academic breakthroughs and practical deployment. Our methodology 
              combines rigorous experimentation with robust engineering to deliver agents that learn 
              from human feedback and perform reliably over extended time horizons.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="/about" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
                Learn more about our approach
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Training efficiency</div>
                <div className="mt-2 text-2xl font-semibold">+67%</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Human feedback cycles</div>
                <div className="mt-2 text-2xl font-semibold">24h</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Task horizon</div>
                <div className="mt-2 text-2xl font-semibold">30+ steps</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-zinc-400">Evaluation accuracy</div>
                <div className="mt-2 text-2xl font-semibold">94%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Latest research</h2>
          <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ArticleCard href="/blog/hello-lumin" title="Introducing Lumin" excerpt="Long horizon agents with human feedback loops." />
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
