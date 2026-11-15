import type { Metadata } from "next"

import { AuthCard } from "@/components/auth/auth-card"
import { SignInForm } from "@/components/auth/sign-in-form"

export const metadata: Metadata = {
  title: "Sign in | HireLoop",
  description:
    "Sign in to your HireLoop account to keep your job search moving.",
}

export default function SignInPage() {
  return (
    <AuthCard
      mode="sign-in"
      title="Welcome back"
      subtitle="Sign in to your HireLoop account and pick up where you left off."
    >
      <SignInForm />
    </AuthCard>
  )
}
