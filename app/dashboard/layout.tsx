import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div >
    </>
  )
}
