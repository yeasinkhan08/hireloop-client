import type { Metadata } from "next"

import { AuthCard } from "@/components/auth/auth-card"
import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Create account | HireLoop",
  description:
    "Create a HireLoop account and find work that actually fits.",
}

export default function SignUpPage() {
  return (
    <AuthCard
      mode="sign-up"
      title="Create your account"
      subtitle="Join thousands of people finding work that actually fits."
    >
      <SignUpForm />
    </AuthCard>
  )
}
