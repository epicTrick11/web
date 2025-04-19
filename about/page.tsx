import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">About Us</h1>
          <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
            We create simple, beautiful, and functional digital experiences.
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Team workspace"
            width={800}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-bold">Our Philosophy</h2>
          <p className="text-muted-foreground">
            We believe in the power of simplicity. Our approach focuses on creating clean, intuitive interfaces that
            prioritize user experience above all else. By removing unnecessary elements and focusing on what truly
            matters, we create digital products that are both beautiful and functional.
          </p>
          <p className="text-muted-foreground">
            Founded in 2023, our team brings together expertise in design, development, and user experience to deliver
            exceptional digital solutions for clients across various industries.
          </p>
        </div>

        <div className="mt-8 grid w-full gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To create digital experiences that simplify complexity and bring clarity to the digital world.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where technology enhances human experience through thoughtful, minimalist design.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-center text-muted-foreground">
            Interested in working with us? We'd love to hear from you.
          </p>
          <Button asChild>
            <Link href="mailto:contact@minimal.com">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
