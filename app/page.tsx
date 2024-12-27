import { Navigation } from '@/components/Navigation'
import { Inicio } from '@/components/Inicio'
import { QuienesSomos } from '@/components/QuienesSomos'
import { Servicios } from '@/components/Servicios'
import { Paquetes } from '@/components/Paquetes'
import { Contactanos } from '@/components/Contactanos'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Inicio />
        <QuienesSomos />
        <Servicios />
        <Paquetes />
        <Contactanos />
      </main>
      <footer className="bg-[#0C1D33] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Reconforta. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}