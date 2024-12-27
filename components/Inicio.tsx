export function Inicio() {
  return (
    <section id="inicio" className="py-20 bg-[#0C1D33] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Bienvenido a nuestra plataforma de servicios digitales</h1>
            <p className="text-xl mb-8">Ofrecemos soluciones innovadoras para impulsar tu presencia en línea</p>
            <button className="bg-[#F7B32B] text-[#0C1D33] px-6 py-2 rounded-full font-semibold hover:bg-[#F7B32B]/80">
              Conoce más
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Placeholder para la imagen */}
            <div className="bg-gray-300 h-64 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
