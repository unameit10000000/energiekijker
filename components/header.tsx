"use client"

import { Leaf, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <Leaf className="h-8 w-8 text-coral-500" />
            <span>Energiekijker.nl</span>
          </Link>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-green-800 text-white border-green-700">
                <div className="flex flex-col mt-10 space-y-4">
                  <Link href="#" className="text-lg py-2 hover:text-coral-400" onClick={() => setIsOpen(false)}>
                    Vergelijken
                  </Link>
                  <Link href="#" className="text-lg py-2 hover:text-coral-400" onClick={() => setIsOpen(false)}>
                    Over ons
                  </Link>
                  <Link href="#" className="text-lg py-2 hover:text-coral-400" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="#" className="hover:text-coral-400">
                    Vergelijken
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-coral-400">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-coral-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
