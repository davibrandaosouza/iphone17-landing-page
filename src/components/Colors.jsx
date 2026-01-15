import { useState } from "react";
import { colors } from "../data/colors.js";
import { models } from "../data/models.js";

function Colors() {
  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <section id="colors" className="bg-black py-20 px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Quatro acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-50">
              <img
                src={colors.find((color) => color.id === selectedColor).image}
                alt="iPhone 17 Pro"
                className="max-w-full max-h-150 mx-auto"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 ${color.color} ${
                  selectedColor === color.id
                    ? "border-white"
                    : "border-gray-600"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid gap-8 mt-20 grid-cols-2">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
              <p className="text-gray-400 mb-4">{model.screen}</p>
              <ul className="space-y-2 text-gray-300">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
            Compre agora a partir de R$ 9.299
          </button>
          <p>Ou em até 12x de 994,92 sem juros</p>
        </div>
      </div>
    </section>
  );
}

export default Colors;
