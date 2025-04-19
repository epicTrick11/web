import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, HardDrive, Cloud, Shield } from "lucide-react"

export default function BackupPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Backup Solutions</h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Secure and reliable backup options to keep your data safe and accessible.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <HardDrive className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Local Backup</CardTitle>
            <CardDescription>Store your data on local devices for quick access</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fast access to your files</li>
              <li>• No internet connection required</li>
              <li>• Complete control over your data</li>
              <li>• One-time setup process</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <Download className="mr-2 h-4 w-4" /> Setup Guide
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Cloud className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Cloud Backup</CardTitle>
            <CardDescription>Secure cloud storage with automatic syncing</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Access from any device</li>
              <li>• Automatic background syncing</li>
              <li>• Protection against hardware failure</li>
              <li>• Versioning and file history</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Cloud className="mr-2 h-4 w-4" /> Start Cloud Backup
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Enterprise Backup</CardTitle>
            <CardDescription>Advanced solutions for business requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Compliance and regulatory features</li>
              <li>• Multi-user management</li>
              <li>• Advanced encryption options</li>
              <li>• Dedicated support team</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Need personalized backup solutions?</h3>
            <p className="text-muted-foreground">
              Our team can help you find the right backup strategy for your needs.
            </p>
          </div>
          <Button>Schedule Consultation</Button>
        </div>
      </div>
    </div>
  )
}
