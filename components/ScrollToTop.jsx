'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-2 bg-[#F7B32B] hover:bg-[#F7B32B]/80 text-[#003366]"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  )
}