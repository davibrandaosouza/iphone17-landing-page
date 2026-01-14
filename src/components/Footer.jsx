import { sections } from "../types/sections.types.js";

const buttonLinks = ["Política de Privacidade", "Termos de Uso", "Vendas"];

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a className="hover:text-white cursor-pointer">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-md text-gray-300">
              Copyright © 2026 Apple Inc. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              {buttonLinks.map((link, index) => (
                <a key={index}>{link}</a>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Site criado para fins educacionais - Davi Brandão de Souza
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
