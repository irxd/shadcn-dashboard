import Header from "@/components/layout/header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
