import { SiteHeader } from "@/components/site-header"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="isolate flex min-h-svh flex-col bg-[#010103] text-white">
      <SiteHeader />
      {children}
    </div>
  )
}
