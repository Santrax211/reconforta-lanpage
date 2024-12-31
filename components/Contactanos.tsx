'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, PhoneIcon as WhatsApp } from 'lucide-react'

export function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contactanos" className="relative">
      {/* Main Contact Section */}
      <div className="min-h-screen py-20" 
        style={{
          backgroundColor: '#FDF5E6',
          backgroundImage: 'radial-gradient(#00000010 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-[#003366] mb-16 text-center">
            Contáctanos
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/contact-image.jpg"
                alt="Asesoría personalizada"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#F7B32B] hover:bg-[#F7B32B]/90 text-black font-semibold py-3"
                >
                  ENVIAR MENSAJE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold text-[#F7B32B] mb-4">GRUPO "JAAS"</h3>
              <div className="space-y-2 text-gray-300">
                <p>jaas15.05.2023@gmail.com</p>
                <p>Comunícate al: 979124862</p>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-[#F7B32B] hover:text-[#F7B32B]/80">
                <Facebook size={24}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-[#F7B32B] hover:text-[#F7B32B]/80">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/51979124862" target="_blank" rel="noopener noreferrer"
                className="text-[#F7B32B] hover:text-[#F7B32B]/80">
                <WhatsApp size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}