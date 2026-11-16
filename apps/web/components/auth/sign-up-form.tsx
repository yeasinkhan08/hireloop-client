"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Briefcase,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

import { AuthField } from "@/components/auth/auth-field"
import { collectFormData } from "@/lib/collect-form-data"
import { authClient } from "@/lib/auth-client"

const roles = [
  { value: "seeker", label: "Job seeker", icon: UserRound },
  { value: "recruiter", label: "Recruiter", icon: Briefcase },
  { value: "admin", label: "Admin", icon: ShieldCheck },
] as const

function SignUpForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = collectFormData(form)

    setIsLoading(true)

    try {
      const { data: signUpResponse, error } = await authClient.signUp.email({
        name: data.name as string,
        email: data.email as string,
        password: data.password as string,
        role: data.role as (typeof roles)[number]["value"],
        callbackURL: "/",
      })

      if (error) {
        toast.error(error.message || "Failed to create account")
        return
      }

      toast.success("Account created successfully!")

      console.log("Signup response:", signUpResponse)

      router.replace("/")
      router.refresh()
    } catch (error) {
      console.error("Signup error:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthField
        id="sign-up-name"
        name="name"
        label="Full name"
        type="text"
        icon={UserRound}
        placeholder="Ada Lovelace"
        autoComplete="name"
        required
      />

      <AuthField
        id="sign-up-email"
        name="email"
        label="Email address"
        type="email"
        icon={Mail}
        placeholder="you@example.com"
        autoComplete="email"
        required
      />

      <AuthField
        id="sign-up-password"
        name="password"
        label="Password"
        type="password"
        icon={Lock}
        placeholder="Create a password"
        autoComplete="new-password"
        minLength={8}
        hint="Use at least 8 characters."
        required
      />

      <fieldset className="space-y-2">
        <legend className="text-[13px] font-medium text-white/70">
          I&apos;m joining as
        </legend>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {roles.map((role) => (
            <label
              key={role.value}
              className="group relative cursor-pointer select-none"
            >
              <input
                type="radio"
                name="role"
                value={role.value}
                defaultChecked={role.value === "seeker"}
                required
                className="sr-only"
              />

              <span className="flex h-14 flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-1.5 text-center text-white/55 transition-colors group-has-[:checked]:border-brand/60 group-has-[:checked]:bg-brand/10 group-has-[:checked]:text-white group-has-[:focus-visible]:ring-4 group-has-[:focus-visible]:ring-brand/20 hover:bg-white/[0.05] sm:h-12 sm:flex-row sm:gap-1.5 sm:px-2">
                <role.icon
                  aria-hidden
                  className="size-4 shrink-0 text-white/35 transition-colors group-has-[:checked]:text-brand"
                />
                <span className="text-[12px] leading-none font-medium">
                  {role.label}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex items-start gap-2.5 pt-0.5">
        <Checkbox
          id="terms"
          name="terms"
          required
          className="mt-0.5 size-[18px] rounded-[5px] border-white/20 bg-white/5 data-checked:border-brand data-checked:bg-brand data-checked:text-white"
        />

        <Label
          htmlFor="terms"
          className="cursor-pointer text-[13px] leading-5 font-normal text-white/50"
        >
          I agree to HireLoop&apos;s terms of service and privacy policy.
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 w-full rounded-xl border border-white/[0.06] bg-brand text-[15px] font-semibold text-brand-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_32px_-12px_rgba(92,83,254,0.75)] hover:bg-[#6b63ff]"
      >
        {isLoading ? "Creating account..." : "Create account"}

        <ArrowRight aria-hidden className="ml-2 size-4" />
      </Button>
    </form>
  )
}

export { SignUpForm }
