import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-5xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-lg text-muted-foreground max-w-xl mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has moved. 
        <br />
        This website is still under active development — new features and pages are coming soon!
      </p>
      <Link href="/">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Go back home
        </Button>
      </Link>
      <p className="text-sm text-gray-400 mt-6">
        🚧 Built with care — more updates are on the way. Stay tuned!
      </p>
    </main>
  )
}
export default NotFound