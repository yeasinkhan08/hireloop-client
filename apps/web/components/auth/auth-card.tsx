import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

type AuthMode = "sign-in" | "sign-up"

const authTabs = [
  { mode: "sign-in", href: "/sign-in", label: "Sign in" },
  { mode: "sign-up", href: "/sign-up", label: "Sign up" },
] as const

const footerCopy = {
  "sign-in": {
    prompt: "New to HireLoop?",
    cta: "Create an account",
    href: "/sign-up",
  },
  "sign-up": {
    prompt: "Already have an account?",
    cta: "Sign in",
    href: "/sign-in",
  },
} as const

type AuthCardProps = {
  mode: AuthMode
  title: string
  subtitle: string
  children: React.ReactNode
}

function AuthCard({ mode, title, subtitle, children }: AuthCardProps) {
  return (
    <section className="w-full max-w-[448px]">
      <div className="rounded-[24px] border border-white/[0.08] bg-[#0a0a0f]/85 p-5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl sm:p-8">
        <nav
          aria-label="Authentication"
          className="grid grid-cols-2 gap-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-1"
        >
          {authTabs.map((tab) => {
            const active = tab.mode === mode

            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-10 items-center justify-center rounded-[9px] text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand/60",
                  active
                    ? "bg-brand text-brand-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_18px_-8px_rgba(92,83,254,0.9)]"
                    : "text-white/45 hover:text-white/80"
                )}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-7">
          <h1 className="font-hero text-[30px] leading-[1.15] font-semibold tracking-[-0.03em] text-white sm:text-[32px]">
            {title}
          </h1>
          <p className="mt-2.5 text-sm leading-6 text-white/45">{subtitle}</p>
        </div>

        <div className="mt-7">{children}</div>

        <div className="mt-6 border-t border-white/[0.06] pt-5 text-center text-[13px] text-white/40">
          {footerCopy[mode].prompt}{" "}
          <Link
            href={footerCopy[mode].href}
            className="font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            {footerCopy[mode].cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

export { AuthCard }
