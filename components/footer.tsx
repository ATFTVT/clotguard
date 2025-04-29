import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-clotguard-red text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link href="/" className="flex items-center space-x-3" scroll={true}>
            <div className="relative h-10 w-10 bg-white rounded-full p-1">
              <Image
                src="/images/clotguard-logo-red.png"
                alt="ClotGuard Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white font-poppins">ClotGuard</span>
          </Link>
          <p className="text-sm text-clotguard-100 text-center md:text-left">
            ClotGuard is currently in development and not yet available for commercial use.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex space-x-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-white hover:text-clotguard-100 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-white hover:text-clotguard-100 transition-colors" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-sm text-clotguard-100">© {new Date().getFullYear()} ClotGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
