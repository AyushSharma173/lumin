import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumin — Long Horizon Agents with Human‑in‑the‑Loop Training",
  description:
    "Research‑driven AI agent development through systematic ablations, domain‑specific evaluations, and human feedback infrastructure for complex, long‑term tasks.",
  metadataBase: new URL("https://lumin.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Lumin
            </Link>
            <nav className="hidden items-center gap-6 text-sm md:flex">
              <Link className="hover:opacity-80" href="/about">About</Link>
              <Link className="hover:opacity-80" href="/blog">Blog</Link>
              <Link
                className="rounded-full bg-foreground px-4 py-2 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                href="/demo"
              >
                Book a demo
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-500">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p>© {new Date().getFullYear()} Lumin. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link className="hover:opacity-80" href="/about">About</Link>
                <Link className="hover:opacity-80" href="/blog">Blog</Link>
                <Link className="hover:opacity-80" href="/demo">Book a demo</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
