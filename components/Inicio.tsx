import Image from 'next/image';

export function Inicio() {
  return (
    <section id="inicio" className="min-h-screen bg-[#FFF3D9] text-[#8B5E34] py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-serif mb-4"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Reconforta
          </h1>
          <div className="text-3xl md:text-4xl mb-8 font-serif">
            Coffee Catering
          </div>
          <p
            className="text-2xl md:text-3xl italic"
            style={{ fontFamily: 'Lobster Two, cursive' }}
          >
            "Porque cada momento merece ser especial"
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row items-stretch gap-12 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex-1 space-y-8 flex flex-col justify-between">
            <p className="text-xl md:text-2xl leading-relaxed">
              En los momentos más significativos de la vida, te acompañamos con nuestro
              servicio profesional de catering. Con más de un año de experiencia,
              estamos comprometidos a llevar calidez, calidad y elegancia a cada evento en
              Lima Metropolitana.
            </p>
            <div className="relative w-full max-h-[450px] aspect-video">
              <Image
                src="/images/pastries.jpg"
                alt="Variedad de pasteles y bocaditos"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 space-y-8 flex flex-col justify-between">
            <div className="relative w-full max-h-[450px] aspect-video">
              <Image
                src="/images/staff.avif"
                alt="Personal preparando alimentos"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Creamos ambientes reconfortantes en tus eventos, con un servicio
              que combina empatía y excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
