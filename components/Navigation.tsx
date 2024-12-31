import Image from 'next/image'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="bg-[#003366] text-white">
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
            <Link href="#inicio" className="text-white hover:text-gray-300 text-lg">INICIO</Link>
            <Link href="#sobre-nosotros" className="text-white hover:text-gray-300 text-lg">SOBRE NOSOTROS</Link>
            <Link href="#servicios" className="text-white hover:text-gray-300 text-lg">SERVICIOS</Link>
            <Link href="#contactanos" className="text-white hover:text-gray-300 text-lg">CONTÁCTANOS</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

