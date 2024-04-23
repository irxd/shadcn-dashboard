import Link from "next/link"
import { UserNav } from "./user-nav"
import { Search } from "./search"

export default function Header() {
  return (
    <div
      className="fixed top-0 left-0 right-0 border-b z-20 bg-background/95 supports-backdrop-blur:bg-background/60 backdrop-blur"
    >
      <nav className="h-14 flex items-center px-4 justify-between">
        <div className="hidden lg:block">
          <Link
            href={"https://github.com/Kiranism/next-shadcn-dashboard-starter"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </nav>
    </div>
  )
}
