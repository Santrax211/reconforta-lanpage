export function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0C1D33] mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0C1D33]">Diseño Web</h3>
            <p className="text-gray-600">Creamos sitios web atractivos y funcionales que reflejan la identidad de tu marca y mejoran la experiencia del usuario.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0C1D33]">Marketing Digital</h3>
            <p className="text-gray-600">Desarrollamos estrategias de marketing digital personalizadas para aumentar tu visibilidad en línea y atraer a tu público objetivo.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0C1D33]">SEO</h3>
            <p className="text-gray-600">Optimizamos tu sitio web para los motores de búsqueda, mejorando tu ranking y aumentando el tráfico orgánico.</p>
          </div>
        </div>
      </div>
    </section>
  )
}