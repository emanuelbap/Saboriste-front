export default function Header() {
  return (
    <header className="bg-white text-black py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Saboriste</h1>
        
        <nav>
          <ul className="flex items-center gap-6">
            <li className="hover:text-pink-200 cursor-pointer transition-colors">Quem Somos</li>
            <li className="hover:text-pink-200 cursor-pointer transition-colors">Cardápio</li>
            <li className="hover:text-pink-200 cursor-pointer transition-colors">Encomendar Agora</li>
          </ul>
        </nav>

        <a href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
          target="_blank"
          rel="noopener noreferrer"
         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2">
          📱 WhatsApp
        </a>
      </div>
    </header>
  )
}
