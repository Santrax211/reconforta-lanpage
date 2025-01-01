import Image from 'next/image'
import { MapPin, Monitor, Users, Target } from 'lucide-react'

export function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="min-h-screen py-20" 
      style={{
        backgroundColor: '#FDF5E6',
        backgroundImage: 'radial-gradient(#00000010 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-[#003366] mb-12 text-center">
          Sobre nosotros
        </h2>

        <div className="max-w-4xl mx-auto mb-12 text-gray-700 text-2xl text-center leading-relaxed">
          <p className="mb-6 text-black">
            En "JAAS", somos un equipo de profesionales apasionados por la educación y la investigación,
            comprometidos con la excelencia académica. Nuestros objetivos es brindar clases particulares, asesorías
            académicas, y soluciones personalizadas para ayudarte a superar cualquier desafío educativo.
          </p>
          <p className='text-black'>
            Tenemos la misión de apoyar a los estudiantes para que logren alcanzar su máximo potencial,
            ofreciéndoles herramientas prácticas y conocimientos fundamentales para lograr las metas académicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          <div className="relative h-[300px] w-full">
            <Image
              src="/images/teaching-scene.jpg"
              alt="Profesores y estudiantes en clase"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl text-[#003366] font-semibold mb-6">
              Nos diferenciamos por:
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-[#2c972e]" />
                <span className="text-gray-700 text-black">Profesores altamente capacitados y con experiencia.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-[#2c972e]" />
                <span className="text-gray-700 text-black">Clases adaptadas a las necesidades específicas de cada estudiante.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Monitor className="w-8 h-8 text-[#2c972e]" />
                <span className="text-gray-700 text-black">Modalidad presencial y virtual para mayor flexibilidad.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-[#2c972e]" />
                <span className="text-gray-700 text-black">Cobertura en todo Lima Metropolitana y Callao.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center relative">
          <h3 className="text-2xl md:text-3xl text-[#003366] font-semibold italic">
            ¿Listo para mejorar tus calificaciones y aprender con los mejores?
          </h3>
          
          {/* Character illustration */}
          <div className="absolute bottom-0 right-0">
            <Image
              src="/images/student-character.png"
              alt="Estudiante"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

