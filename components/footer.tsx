import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Minimal. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
