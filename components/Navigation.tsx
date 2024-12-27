import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  return (
    <nav className="bg-[#0C1D33] text-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
        <Image
              src="/images/logo.jpg"
              alt="Logo de la empresa"
              width={120}
              height={40}
              className="w-auto h-12 sm:h-16 max-w-[200px] rounded mr-4"
            />
          <div className="hidden md:flex space-x-6">
            <Link href="#inicio" className="hover:text-[#F7B32B]">Inicio</Link>
            <Link href="#quienes-somos" className="hover:text-[#F7B32B]">Quienes somos</Link>
            <Link href="#servicios" className="hover:text-[#F7B32B]">Servicios</Link>
            <Link href="#paquetes" className="hover:text-[#F7B32B]">Paquetes</Link>
            <Link href="#contactanos" className="hover:text-[#F7B32B]">Contáctanos</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}