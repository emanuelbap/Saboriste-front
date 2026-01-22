"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent text-branco-principal py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-ouro">Saboriste</h1>
        
        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li><a href="#quem-somos" className="hover:text-[#E07A5F] cursor-pointer transition-colors">Quem somos</a></li>
            <li><a href="#cardapio" className="hover:text-[#E07A5F] cursor-pointer transition-colors">Cardápio</a></li>
            <li><a href="#encomendar" className="hover:text-[#E07A5F] cursor-pointer transition-colors">Encomendar Agora</a></li>
          </ul>
        </nav>

        {/* Botão WhatsApp Desktop */}
        <a href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors items-center gap-2">
          ☎ Falar no WhatsApp
        </a>

        {/* Botão Hambúrguer Mobile */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden fixed inset-0 bg-black/95 z-20 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav>
          <ul className="flex flex-col items-center gap-6 text-xl">
            <li><a href="#quem-somos" onClick={() => setMenuOpen(false)} className="hover:text-[#E07A5F] cursor-pointer transition-colors">Quem somos</a></li>
            <li><a href="#cardapio" onClick={() => setMenuOpen(false)} className="hover:text-[#E07A5F] cursor-pointer transition-colors">Cardápio</a></li>
            <li><a href="#encomendar" onClick={() => setMenuOpen(false)} className="hover:text-[#E07A5F] cursor-pointer transition-colors">Encomendar Agora</a></li>
          </ul>
        </nav>

        <a href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 text-lg">
          ☎ Falar no WhatsApp
        </a>
      </div>
    </header>
  )
}
