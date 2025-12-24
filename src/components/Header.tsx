export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent text-branco-principal py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#E07A5F]">Saboriste</h1>
        
        <nav>
          <ul className="flex items-center gap-6">
            <li><a href="#quem-somos" className="hover:text-[#E07A5F] cursor-pointer transition-colors">quem somos</a></li>
            <li><a href="#cardapio" className="hover:text-[#E07A5F] cursor-pointer transition-colors">Cardápio</a></li>
            <li><a href="#localizacao" className="hover:text-[#E07A5F] cursor-pointer transition-colors">Localização</a></li>
            <li><a href="#encomendar" className="hover:text-[#E07A5F] cursor-pointer transition-colors">Encomendar Agora</a></li>
          </ul>
        </nav>

        <a href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
          target="_blank"
          rel="noopener noreferrer"
         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2">
          ☎ Falar no WhatsApp
        </a>
      </div>
    </header>
  )
}
