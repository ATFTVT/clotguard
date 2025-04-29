"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [atTop, setAtTop] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
        setAtTop(false)
      } else {
        setScrolled(false)
        setAtTop(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent border-transparent",
        atTop && "absolute",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image
              src="/images/clotguard-logo.png"
              alt="ClotGuard Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span
            className={cn(
              "text-xl font-bold font-poppins transition-colors duration-300",
              atTop ? "text-white" : "text-clotguard-red",
            )}
          >
            ClotGuard
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors",
              atTop ? "text-white hover:text-white/80" : "text-gray-700 hover:text-clotguard-red",
            )}
          >
            Home
          </Link>
          <Link
            href="/solution"
            className={cn(
              "text-sm font-medium transition-colors",
              atTop ? "text-white hover:text-white/80" : "text-gray-700 hover:text-clotguard-red",
            )}
          >
            Our Solution
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors",
              atTop ? "text-white hover:text-white/80" : "text-gray-700 hover:text-clotguard-red",
            )}
          >
            About Us
          </Link>
          <Link
            href="/prototype"
            className={cn(
              "text-sm font-medium transition-colors",
              atTop ? "text-white hover:text-white/80" : "text-gray-700 hover:text-clotguard-red",
            )}
          >
            Prototype
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors",
              atTop ? "text-white hover:text-white/80" : "text-gray-700 hover:text-clotguard-red",
            )}
          >
            Contact Us
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", atTop ? "text-white" : "text-gray-700")}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-clotguard-red"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/solution"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-clotguard-red"
              onClick={toggleMenu}
            >
              Our Solution
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-clotguard-red"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/prototype"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-clotguard-red"
              onClick={toggleMenu}
            >
              Prototype
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors text-gray-700 hover:text-clotguard-red"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
