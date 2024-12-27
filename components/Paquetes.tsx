export function Paquetes() {
  return (
    <section id="paquetes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0C1D33] mb-8">Nuestros Paquetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0C1D33]">Plan Básico</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>50 und de café</li>
              <li>Infusions¿es y chocolates</li>
              <li>2 Gaseosas de 1 1/2 lt</li>
              <li>2 lt de agua mineral</li>
              <li>Galletas</li>
              <li>Cortesía de café (10 unid)</li>
            </ul>
            <p className="text-2xl font-bold text-center text-[#F7B32B]">$999</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0C1D33]">Plan Regular</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>5o unid de café</li>
              <li>Infusiones y chocolates</li>
              <li>2 Gaseosas de 3 lt</li>
              <li>3 lt de agua mineral</li>
              <li>50 Sanguchitos de pollo</li>
              <li>50 Sanguchitos de jamón y queso</li>
              <li>Galletas</li>
              <li>Cortesía de café (20 unid)</li>
            </ul>
            <p className="text-2xl font-bold text-center text-[#F7B32B]">$1,999</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0C1D33]">Plan Premium</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>100 unid de café</li>
              <li>Infusiones y chocolates</li>
              <li>3 Gaseosas de 3 lt</li>
              <li>4 - 5 lt de agua mineral</li>
              <li>100 Sanguchitos de pollo, jamón y queso</li>
              <li>100 Bocaditos salados</li>
              <li>100 Bocaditos dulces</li>
              <li>Galletas: wafer, palito de jonjolí, etc.</li>
              <li>Cortesía: Galletas baladas de chocolate, 30 unid de café</li>
            </ul>
            <p className="text-2xl font-bold text-center text-[#F7B32B]">$3,999</p>
          </div>
        </div>
      </div>
    </section>
  )
}