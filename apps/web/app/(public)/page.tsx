import Image from "next/image"
import Link from "next/link"
import {
  Briefcase,
  ChartNoAxesColumnIncreasing,
  MapPin,
  Search,
  Star,
  UserRoundSearch,
} from "lucide-react"

import heroBackground from "@/app/images/hero-bg.png"
import { Button } from "@workspace/ui/components/button"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  { value: "50K", label: "Active Jobs", Icon: Briefcase },
  { value: "12K", label: "Companies", Icon: ChartNoAxesColumnIncreasing },
  { value: "2M", label: "Job Seekers", Icon: UserRoundSearch },
  { value: "97%", label: "Satisfaction Rate", Icon: Star },
]

function SparkleIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-6 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="badge-sparkle"
          x1="4"
          y1="2"
          x2="21"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6EEFF" />
          <stop offset="0.45" stopColor="#BAC8FA" />
          <stop offset="0.72" stopColor="#C86D36" />
          <stop offset="1" stopColor="#883F2E" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5c.5 4.2 2.3 6 6.5 6.5-4.2.5-6 2.3-6.5 6.5-.5-4.2-2.3-6-6.5-6.5 4.2-.5 6-2.3 6.5-6.5Z"
        fill="url(#badge-sparkle)"
      />
      <path
        d="M18.9 15.6c.24 2.02 1.1 2.88 3.12 3.12-2.02.24-2.88 1.1-3.12 3.12-.24-2.02-1.1-2.88-3.12-3.12 2.02-.24 2.88-1.1 3.12-3.12Z"
        fill="url(#badge-sparkle)"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[84px] bottom-0 -z-10 lg:-top-[98px]"
      >
        <Image
          src={heroBackground}
          alt=""
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-[60px]">
        <section
          aria-labelledby="hero-heading"
          className="mx-auto flex w-full max-w-[784px] flex-col items-center pt-20 sm:pt-28 lg:pt-[176px]"
        >
          <div className="flex h-[50px] w-full items-center justify-center">
            <span
              aria-hidden
              className="hidden h-px w-16 bg-[linear-gradient(90deg,rgba(1,1,35,0)_0%,rgba(168,168,168,0.7)_100%)] sm:block"
            />

            <div className="rounded-full bg-[linear-gradient(180deg,rgba(168,168,168,0.3)_0%,rgba(153,153,153,0)_100%)] p-px">
              <div className="flex h-12 items-center gap-3 rounded-full bg-[linear-gradient(180deg,#474747_0%,#1f1f1f_45%,#010102_100%)] px-4 shadow-[inset_0_0_6px_6px_rgba(0,0,0,0.1)] sm:gap-4 sm:px-6">
                <SparkleIcon />
                <span className="font-badge text-sm leading-6 whitespace-nowrap text-white sm:text-xl">
                  50,000+ new jobs this month
                </span>
              </div>
            </div>

            <span
              aria-hidden
              className="hidden h-px w-16 bg-[linear-gradient(90deg,rgba(168,168,168,0.7)_0%,rgba(1,1,35,0)_100%)] sm:block"
            />
          </div>

          <h1
            id="hero-heading"
            className="mt-8 max-w-[784px] text-center font-hero text-[40px] leading-[1.1] font-bold tracking-[-0.02em] text-white sm:text-[48px] lg:text-[56px] lg:leading-[64px]"
          >
            Find Your Dream Job Today
          </h1>

          <p className="mt-4 max-w-[784px] text-center font-hero text-base leading-[1.6] text-white/70 sm:text-lg lg:text-xl">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          <form
            action="/jobs"
            className="mt-10 flex w-full flex-col gap-1 rounded-[16px] border border-white/20 bg-[#101010] p-2 sm:mt-12 sm:h-16 sm:flex-row sm:items-center sm:gap-6 sm:py-2 sm:pr-2 sm:pl-6"
          >
            <label className="flex h-12 w-full min-w-0 items-center gap-2 rounded-[12px] px-3 sm:w-0 sm:flex-1 sm:rounded-none sm:px-0">
              <Search
                aria-hidden
                className="size-6 shrink-0 text-white"
                strokeWidth={1.5}
              />
              <span className="sr-only">Job title, skill or company</span>
              <input
                type="search"
                name="q"
                placeholder="Job title, skill or company"
                className="h-full w-full min-w-0 bg-transparent font-sans text-base text-white outline-none placeholder:text-white/80"
              />
            </label>

            <span
              aria-hidden
              className="mx-3 h-px shrink-0 bg-white/10 sm:mx-0 sm:h-[23px] sm:w-px sm:bg-white/20"
            />

            <label className="flex h-12 w-full min-w-0 items-center gap-2 rounded-[12px] px-3 sm:w-0 sm:flex-1 sm:rounded-none sm:px-0">
              <MapPin
                aria-hidden
                className="size-6 shrink-0 text-white"
                strokeWidth={1.5}
              />
              <span className="sr-only">Location or remote</span>
              <input
                type="search"
                name="location"
                placeholder="Location or Remote"
                className="h-full w-full min-w-0 bg-transparent font-sans text-base text-white outline-none placeholder:text-white/80"
              />
            </label>

            <Button
              type="submit"
              className="mt-1 h-12 w-full gap-2 rounded-[12px] bg-brand text-base font-medium text-white hover:bg-brand/90 sm:mt-0 sm:size-12 sm:w-12 sm:shrink-0 sm:px-0"
            >
              <Search aria-hidden className="size-6" strokeWidth={1.75} />
              <span className="sm:sr-only">Search</span>
            </Button>
          </form>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <span className="font-hero text-base leading-[21px] text-white/70">
              Trending Position
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {trendingPositions.map((position) => (
                <Link
                  key={position}
                  href={`/jobs?q=${encodeURIComponent(position)}`}
                  className="flex h-[33px] items-center rounded-full border border-white/10 bg-[#1a1a1b] px-3 font-hero text-sm leading-[21px] text-white transition-colors hover:border-white/25 hover:bg-[#242425]"
                >
                  {position}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="stats-heading"
          className="mx-auto mt-24 w-full max-w-[1320px] pt-12 pb-16 sm:mt-32 lg:mt-[286px] lg:pt-[72px] lg:pb-[72px]"
        >
          <h2
            id="stats-heading"
            className="mx-auto max-w-[600px] text-center font-headline text-[32px] leading-[1.3] font-medium tracking-[-0.6px] text-white/70 sm:text-[40px] sm:tracking-[-1px]"
          >
            Assisting over 15,000 job seekers find their dream positions.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 xl:grid-cols-4">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="flex h-[254px] flex-col justify-between rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#313131_0%,#313131_12%,#010102_72%)] bg-origin-border p-6"
              >
                <Icon
                  aria-hidden
                  className="size-6 text-white"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-stat text-[56px] leading-[64px] font-semibold tracking-[-0.02em] text-white">
                    {value}
                  </p>
                  <p className="mt-4 font-label text-[18px] leading-[30px] text-white">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
