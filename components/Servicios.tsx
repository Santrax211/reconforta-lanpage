import Image from 'next/image'

export function Servicios() {
  return (
    <section id="servicios" className="min-h-screen py-20"
      style={{
        backgroundColor: '#003366',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center italic">
          Nuestros Servicios
        </h2>

        {/* Clases Particulares */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/private-class.jpg"
              alt="Clases particulares"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-white border-b-2 pb-2 inline-block text-center w-full">
              Clases Particulares
            </h3>
            <p className="text-white/90 text-2xl italic leading-relaxed text-center">
              "Brindamos apoyo académico personalizado en diferentes niveles educativos,
              desde primaria hasta carreras universitarias. Utilizamos métodos innovadores
              para fortalecer habilidades como razonamiento lógico, lectura comprensiva y
              redacción. Nuestro enfoque es adaptarnos al ritmo y las necesidades específicas
              de cada estudiante."
            </p>
          </div>
        </div>

        {/* Asesorías */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-4xl font-bold text-white border-b-2 pb-2 inline-block text-center w-full">
              Asesorías en tareas y proyectos
            </h3>
            <p className="text-white/90 text-2xl italic leading-relaxed text-center">
              "Te guiamos en la resolución de tareas complejas y en la elaboración de
              proyectos académicos. Ofrecemos orientación en la estructura de monografías,
              ensayos y trabajos de investigación, asegurando que cumplan con los más altos
              estándares académicos."
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/homework-assistance.jpg"
              alt="Asesorías en tareas"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Preparación para evaluaciones */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/preparation-evaluations.jpg"
              alt="Preparación para evaluaciones"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 ">
            <h3 className="text-4xl font-bold text-white border-b-2 pb-2 inline-block text-center w-full">
              Preparación para evaluaciones
            </h3>
            <p className="text-white/90 text-2xl italic leading-relaxed text-center">
              "Diseñamos clases personalizadas para ayudarte a destacar en tus evaluaciones.
              Ofrecemos simulacros específicos y técnicas efectivas para administrar el tiempo
              durante los exámenes. Nuestro objetivo es reforzar los temas más complicados y
              proporcionarte las herramientas necesarias para superar cualquier prueba o desafío
              con confianza"
            </p>
          </div>
        </div>

        {/* Descubre más section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 italic">
            "Descubre más sobre nuestros servicios"
          </h2>

          <div className="max-w-2xl mx-auto">
            <Image
              src="/images/services-flyer.jpeg"
              alt="Información de servicios y contacto"
              width={600}
              height={600}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          {/*<div className="mt-8 text-white">
            <p className="text-xl">Contáctanos:</p>
            <div className="space-y-2 mt-4">
              <p>📱 979134862 / 979225833</p>
              <p>✉️ jaas5.05.2023@gmail.com</p>
            </div>
          </div>*/}
        </div>

      </div>
    </section>
  )
}

