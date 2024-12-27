export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0C1D33] mb-8">Quiénes Somos</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <p className="text-gray-600 mb-4">
              Somos una empresa líder en servicios digitales, dedicada a proporcionar soluciones innovadoras y personalizadas para nuestros clientes. Con años de experiencia en el sector, nos enorgullecemos de ofrecer servicios de alta calidad que impulsan el crecimiento y el éxito de las empresas en el mundo digital.
            </p>
            <p className="text-gray-600">
              Nuestro equipo está formado por expertos apasionados y creativos, comprometidos con la excelencia y la satisfacción del cliente. Nos mantenemos a la vanguardia de las últimas tendencias y tecnologías para garantizar que nuestros clientes siempre estén un paso adelante en el competitivo mercado digital.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* Placeholder para la imagen */}
            <div className="bg-gray-300 h-64 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

