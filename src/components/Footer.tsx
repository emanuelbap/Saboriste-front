export default function Footer() {
  const anoAtual = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1a1a1a] border-t border-cinza-divisor">
      {/* Seção principal do footer - APENAS DESKTOP */}
      <div className="hidden md:block max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-12">
          
          {/* Logo e descrição */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-ouro mb-4">Saboriste</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Doces artesanais feitos com amor e dedicação. 
              Transformando momentos especiais em memórias doces.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-branco-principal mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#quem-somos" className="text-gray-400 hover:text-ouro transition-colors text-sm">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-gray-400 hover:text-ouro transition-colors text-sm">
                  Cardápio
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ouro transition-colors text-sm"
                >
                  Fazer Encomenda
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-right">
            <h4 className="text-lg font-semibold text-branco-principal mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Rio de Janeiro, RJ</p>
              <p>📱 (21) 97137-8699</p>
              <a 
                href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de copyright - SEMPRE VISÍVEL */}
      <div className="border-t border-gray-800 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © {anoAtual} <span className="text-ouro font-medium">Saboriste</span> Doces Artesanais. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-gray-500 mt-1">
            CNPJ: 00.000.000/0001-00 | Rio de Janeiro, RJ
          </p>
        </div>
      </div>
    </footer>
  )
}
