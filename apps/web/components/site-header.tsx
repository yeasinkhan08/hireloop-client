"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import logo from "@/app/images/logo.png"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { useSession } from "@/lib/auth-client"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/companies", label: "Company" },
  { href: "/pricing", label: "Pricing" },
]

function useActiveLink() {
  const pathname = usePathname()

  return (href: string) => pathname === href || pathname.startsWith(`${href}/`)
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const isActive = useActiveLink()
  const { data: session } = useSession()
  console.log("user session in navber", session)

  return (
    <header className="w-full pt-4 lg:pt-6">
      <div className="mx-auto w-full max-w-[1368px] px-4 sm:px-6">
        <div className="flex h-[68px] w-full items-center justify-between gap-4 rounded-[16px] bg-[#222222] pr-3 pl-4 sm:pl-6 lg:h-[74px] lg:pr-0 lg:pl-6">
          <Link
            href="/"
            aria-label="HireLoop home"
            className="shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Image
              src={logo}
              alt="HireLoop"
              priority
              className="h-9 w-auto sm:h-10 lg:h-11"
            />
          </Link>

          {/* Desktop nav — 646×74 group, 32px left / 8px right padding */}
          <nav aria-label="Main" className="hidden h-full items-center lg:flex">
            <div className="flex items-center gap-10 pl-8">
              {navLinks.map((link) => {
                const active = isActive(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-base leading-[29px] whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      active
                        ? "font-semibold text-[#EDEDEF]"
                        : "font-normal text-[#EDEDEF] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <span
              aria-hidden
              className="mx-6 h-6 w-px shrink-0 bg-[#A8A8A8]/40"
            />

            <div className="flex items-center gap-4 pr-2">
              {session?.user ? (
                <span className="text-white">Welcome,{session.user.name}</span>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    nativeButton={false}
                    className="h-[58px] w-[106px] rounded-[12px] px-0 text-[18px] font-semibold text-brand hover:bg-white/5 hover:text-brand"
                    render={<Link href="/sign-in" />}
                  >
                    Sign In
                  </Button>
                  <Button
                    nativeButton={false}
                    className="h-[52px] w-[143px] rounded-[12px] border border-[#090A15]/10 bg-brand px-0 text-[18px] font-medium text-brand-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90"
                    render={<Link href="/sign-up" />}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </nav>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="size-11 rounded-xl text-white hover:bg-white/10 hover:text-white lg:hidden"
                />
              }
            >
              <Menu />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-sm gap-0 border-white/10 bg-[#111111] text-[#EDEDEF]"
            >
              <SheetHeader className="flex flex-row items-center gap-3 border-b border-white/10 px-5 py-4 pr-14">
                <SheetTitle className="sr-only">Site navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Links to the main pages of HireLoop.
                </SheetDescription>
                <Image src={logo} alt="HireLoop" className="h-9 w-auto" />
              </SheetHeader>

              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-3 py-4"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                        active
                          ? "bg-white/10 font-semibold text-white"
                          : "text-[#EDEDEF]/75 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-2 border-t border-white/10 p-5">
                <Button
                  variant="ghost"
                  nativeButton={false}
                  className="h-12 w-full rounded-[12px] text-[18px] font-semibold text-brand hover:bg-white/5 hover:text-brand"
                  render={
                    <Link href="/sign-in" onClick={() => setMenuOpen(false)} />
                  }
                >
                  Sign In
                </Button>
                <Button
                  nativeButton={false}
                  className="h-[52px] w-full rounded-[12px] border border-[#090A15]/10 bg-brand text-[18px] font-medium text-brand-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90"
                  render={
                    <Link href="/sign-up" onClick={() => setMenuOpen(false)} />
                  }
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
