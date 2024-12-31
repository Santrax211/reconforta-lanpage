//import { Navigation } from '@/components/Navigation'
import { Inicio } from '@/components/Inicio'
import { SobreNosotros } from '@/components/SobreNosotros'
import { Servicios } from '@/components/Servicios'
import { Contactanos } from '@/components/Contactanos'  

export default function Home() {
  return (
    <main className="min-h-screen">
      {/*<Navigation />*/}
      <Inicio />
      <SobreNosotros />
      <Servicios />
      <Contactanos />
    </main>
  )
}