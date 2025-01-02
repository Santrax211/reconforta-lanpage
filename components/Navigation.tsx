'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <nav 
      className={`
        bg-[#003366] text-white font-['Roboto',sans-serif] 
        fixed top-0 left-0 right-0 z-50 transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="JAAS Logo"
              width={60}
              height={60}
              className="w-auto h-12"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            {['INICIO', 'SOBRE NOSOTROS', 'SERVICIOS', 'CONTÁCTANOS'].map((item) => (
              <Link 
                key={item} 
                href={`#${item === 'CONTÁCTANOS' ? 'contactanos' : item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-semibold hover:text-[#F7B32B] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

