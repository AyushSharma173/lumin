"use client";

import { useState } from "react";

export default function DemoPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      useCase: String(formData.get("useCase") || ""),
      message: String(formData.get("message") || ""),
      // honeypot
      website: String(formData.get("website") || ""),
    };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }
      setStatus("success");
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Book a demo</h1>
      <p className="mt-3 text-zinc-500">
        Tell us a bit about your use case and we’ll get back within 24 hours.
      </p>

      <form
        className="mt-10 grid gap-6"
        action={async (fd) => {
          await onSubmit(fd);
        }}
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">Full name</label>
          <input id="name" name="name" required placeholder="Ada Lovelace"
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-indigo-500/40" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">Work email</label>
          <input id="email" name="email" type="email" required placeholder="ada@analytical.engine"
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-indigo-500/40" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-medium">Company</label>
          <input id="company" name="company" placeholder="Analytical Engine Co."
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-indigo-500/40" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="useCase" className="text-sm font-medium">What are you looking to build?</label>
          <input id="useCase" name="useCase" placeholder="Agentic underwriting, bio automation, on‑device assistant..."
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-indigo-500/40" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">Anything else?</label>
          <textarea id="message" name="message" rows={5} placeholder="Timelines, constraints, metrics, data availability..."
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-indigo-500/40" />
        </div>
        {/* Honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-60 dark:hover:bg-[#ccc]"
          >
            {status === "loading" ? "Sending..." : "Request demo"}
          </button>
          {status === "success" && (
            <span className="text-sm text-emerald-500">Thanks! We’ll be in touch shortly.</span>
          )}
          {status === "error" && (
            <span className="text-sm text-rose-500">{error}</span>
          )}
        </div>
      </form>
    </div>
  );
}


