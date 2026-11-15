import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import logo from "@/app/images/logo.png"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#010103] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-12%,rgba(92,83,254,0.30),transparent_62%)]" />
        <div className="absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] opacity-40 [background-size:72px_72px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#010103] to-transparent" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-[1368px] items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <Link
          href="/"
          aria-label="HireLoop home"
          className="shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <Image
            src={logo}
            alt="HireLoop"
            preload
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 rounded-lg text-[13px] font-medium text-white/45 transition-colors outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-brand/60 sm:text-sm"
        >
          <ArrowLeft
            aria-hidden
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 sm:px-6 sm:py-12">
        {children}
      </main>

      <footer className="relative z-10 mx-auto flex w-full max-w-[1368px] flex-col items-center justify-between gap-2 px-4 pb-6 text-xs text-white/30 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>
        <p className="text-[10px] tracking-[0.18em] uppercase">
          Hire smarter. Work better.
        </p>
      </footer>
    </div>
  )
}
