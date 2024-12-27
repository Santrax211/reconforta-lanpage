import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contactanos() {
  return (
    <section id="contactanos" className="py-20 bg-[#0C1D33] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <Input type="text" placeholder="Nombre" className="bg-white text-[#0C1D33]" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Correo electrónico" className="bg-white text-[#0C1D33]" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Mensaje" className="bg-white text-[#0C1D33]" />
            </div>
            <Button type="submit" className="w-full bg-[#F7B32B] text-[#0C1D33] hover:bg-[#F7B32B]/80">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

