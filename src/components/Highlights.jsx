import { specsHighlights as specs } from "../types/specsHighlights.types.js";

function Highlights() {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/img/titanium-design.jpg"
              alt="iPhone Titanium"
            />
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/img/ios-features.jpg"
              alt="iOS 2026"
            />
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="text-gray-300 mb-6">
            O chip mais poderoso em um smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="/img/chip-a18-pro.jpg"
            alt="Chip A18"
          />
          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% mais rápida</li>
            <li>GPU 25% mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray Tracing acelerado por hardware</li>
          </ul>
        </div>

        <div className="text-center" id="camera">
          <h3 className="font-bold text-4xl mb-8">
            Sistema de câmera Pro avançado
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 mb-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <p className={`text-4xl font-bold mb-4 ${spec.color}`}>
                  {spec.value}
                </p>
                <p className="text-xl font-semibold mb-2">{spec.label}</p>
                <p className="text-gray-400">{spec.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
