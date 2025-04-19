import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="container flex flex-col items-center justify-center gap-6 py-24 md:py-32">
        <div className="flex max-w-[640px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Clean, Modern, Minimalist</h1>
          <p className="max-w-[500px] text-muted-foreground md:text-xl">
            A simple and intuitive design focused on clarity and simplicity.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="/backup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full bg-muted/50 py-12 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-lg p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl font-bold text-primary">01</span>
            </div>
            <h3 className="text-xl font-bold">Simple</h3>
            <p className="text-muted-foreground">Clean interfaces with intuitive navigation and clear hierarchy.</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl font-bold text-primary">02</span>
            </div>
            <h3 className="text-xl font-bold">Modern</h3>
            <p className="text-muted-foreground">
              Contemporary design principles with a focus on typography and space.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl font-bold text-primary">03</span>
            </div>
            <h3 className="text-xl font-bold">Minimalist</h3>
            <p className="text-muted-foreground">Reduced to the essentials, eliminating clutter and distractions.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
