import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
              Long horizon agents with human‑in‑the‑loop
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-500">
              We believe the future of enterprise AI is in open, auditable frameworks—not black-box APIs. 
              Our research delivers multi-agent systems that solve real-world, long-running business processes 
              by capturing the unwritten decision-making logic of your employees.
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
            <h3 className="text-lg font-semibold">Enterprise‑sovereign systems</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Open, auditable frameworks that give you control over your AI infrastructure—no black-box dependencies.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Behavioral data capture</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Systems that learn from your experts' unwritten decision-making logic, not just their outputs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm dark:bg-black/40">
            <h3 className="text-lg font-semibold">Provable reliability</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Rigorous validation against failure taxonomies to solve the perfection fallacy and deliver dependable results.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Building your competitive moat</h2>
            <p className="mt-4 text-zinc-500">
              We design sandboxed RL environments and asynchronous human handoffs to capture the behavioral data 
              that makes your organization unique. Our approach moves beyond the perfection fallacy to deliver 
              bespoke, provably reliable systems that work for your specific business processes.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="/about" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">
                Learn more about our approach
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6">
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-sm text-zinc-400">Our focus</div>
                <div className="mt-2 text-lg font-semibold">Enterprise-sovereign AI</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-sm text-zinc-400">Key insight</div>
                <div className="mt-2 text-lg font-semibold">Behavioral data LLM power</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="text-sm text-zinc-400">Our promise</div>
                <div className="mt-2 text-lg font-semibold">Provably reliable systems</div>
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
