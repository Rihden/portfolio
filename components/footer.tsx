import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">© {currentYear} Ned Boudeli. All rights reserved.</p>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <p>
            Made with <Heart className="inline h-3 w-3 text-red-500" /> and AI
          </p>
        </div>
      </div>
    </footer>
  )
}

