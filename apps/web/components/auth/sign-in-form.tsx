"use client"

import * as React from "react"
import { ArrowRight, Lock, Mail } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

import { AuthField } from "@/components/auth/auth-field"
import { collectFormData } from "@/lib/collect-form-data"

function SignInForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = collectFormData(event.currentTarget)

    // TODO: Send these credentials to better-auth once authentication is wired up.
    // Remove this log before shipping — it includes the raw password.
    console.log("[HireLoop] sign-in form data:", data)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthField
        id="sign-in-email"
        name="email"
        label="Email address"
        type="email"
        icon={Mail}
        placeholder="you@example.com"
        autoComplete="email"
        required
      />

      <AuthField
        id="sign-in-password"
        name="password"
        label="Password"
        type="password"
        icon={Lock}
        placeholder="Enter your password"
        autoComplete="current-password"
        required
      />

      <div className="flex items-center gap-2.5 pt-0.5">
        <Checkbox
          id="remember-me"
          name="rememberMe"
          className="size-[18px] rounded-[5px] border-white/20 bg-white/5 data-checked:border-brand data-checked:bg-brand data-checked:text-white"
        />
        <Label
          htmlFor="remember-me"
          className="cursor-pointer text-[13px] leading-5 font-normal text-white/50"
        >
          Remember me for 30 days
        </Label>
      </div>

      <Button
        type="submit"
        className="h-12 w-full rounded-xl border border-white/[0.06] bg-brand text-[15px] font-semibold text-brand-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_32px_-12px_rgba(92,83,254,0.75)] hover:bg-[#6b63ff]"
      >
        Sign in
        <ArrowRight
          aria-hidden
          className="ml-2 size-4 transition-transform group-hover/button:translate-x-0.5"
        />
      </Button>
    </form>
  )
}

export { SignInForm }
