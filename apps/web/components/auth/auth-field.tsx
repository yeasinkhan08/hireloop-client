"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

type AuthFieldProps = React.ComponentProps<"input"> & {
  id: string
  label: string
  icon: LucideIcon
  hint?: React.ReactNode
}

function AuthField({
  id,
  label,
  icon: Icon,
  hint,
  className,
  type = "text",
  ...props
}: AuthFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const isPassword = type === "password"

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[13px] font-medium text-white/70">
        {label}
      </Label>
      <div className="relative">
        <Icon
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-white/30"
        />
        <Input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            "h-12 rounded-xl border-white/[0.08] bg-white/[0.03] pl-11 text-[15px] text-white placeholder:text-white/35 focus-visible:border-brand/60 focus-visible:ring-4 focus-visible:ring-brand/15 md:text-[15px] dark:bg-white/[0.03]",
            isPassword && "pr-12",
            className
          )}
          {...props}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-lg text-white/45 transition-colors outline-none hover:bg-white/5 hover:text-white/80 focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            {showPassword ? (
              <EyeOff aria-hidden className="size-[18px]" />
            ) : (
              <Eye aria-hidden className="size-[18px]" />
            )}
          </button>
        ) : null}
      </div>
      {hint ? <p className="text-xs leading-5 text-white/45">{hint}</p> : null}
    </div>
  )
}

export { AuthField }
