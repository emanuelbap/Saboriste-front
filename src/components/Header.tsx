export default function Header() {
  return (
    <header className="bg-preto-suave text-branco-principal py-4 px-6 border-b border-cinza-divisor">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dourado">Saboriste</h1>
        
        <nav>
          <ul className="flex items-center gap-6">
            <li><a href="#quem-somos" className="hover:text-dourado cursor-pointer transition-colors">Quem Somos</a></li>
            <li><a href="#cardapio" className="hover:text-dourado cursor-pointer transition-colors">Cardápio</a></li>
            <li><a href="#encomendar" className="hover:text-dourado cursor-pointer transition-colors">Encomendar Agora</a></li>
          </ul>
        </nav>

        <a href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
          target="_blank"
          rel="noopener noreferrer"
         className="bg-dourado hover:bg-dourado-hover text-fundo px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2">
          📱 WhatsApp
        </a>
      </div>
    </header>
  )
}
