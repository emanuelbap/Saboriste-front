import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
    const menu = [
        {id: "b1", name: "Brigadeiro casadinho", price: "R$4,50", imagem: "/imagens/doce_casadinho.png"},
        {id: "b2", name: "Brigadeiro de maracujá", price: "R$4,50", imagem: "/imagens/doce_maracuja.png"},
        {id: "b3", name: "Brigadeiro de limao", price: "R$4,50", imagem: "/imagens/doce_limao.png"},
        {id: "b4", name: "Brigadeiro de abacaxi", price: "R$4,50", imagem: "/imagens/doce_abacaxi.png"},
        {id: "b5", name: "Brigadeiro de franbuesa", price: "R$4,50", imagem: "/imagens/doce_franbuesa.png"},
        {id: "b6", name: "Brigadeiro de banana", price: "R$4,50", imagem: "/imagens/doce_banana.png"},
        {id: "b7", name: "Brigadeiro de laranja", price: "R$4,50", imagem: "/imagens/doce_laranja.png"}
    ];
  return (
    <main className="min-h-screen bg-fundo">
      
      {/* Hero Section com imagem de fundo */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Imagem de fundo */}
        <Image
          src="/imagens/tela_home_saboriste.jpeg"
          alt="Doces artesanais Saboriste"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay escuro para melhorar leitura do texto */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Header posicionado no topo */}
        <Header />
        
        {/* Conteúdo centralizado */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-branco-principal leading-tight">Doces Artesanais que Encantam</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-8 text-branco-principal/90">Brigadeiros, bolos e trufas feitos com carinho e ingredientes selecionados</h2>
          <button className="bg-[#E07A5F] hover:bg-[#c9684f] text-white px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg transition-colors shadow-lg">
            <a href={`https://wa.me/${55021971378699}?text=${"Olá, gostaria de encomendar... "}`}
          target="_blank"
          rel="noopener noreferrer">
            Encomendar Agora
            </a>
          </button>
          <p className="mt-4 text-[#E07A5F] text-sm">Entrega disponível sob consulta</p>
        </div>
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="bg-fundo py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-dourado mb-8 sm:mb-10">Quem somos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Imagem */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/imagens/quem-somos.jpg"
                alt="Doces artesanais da Saboriste"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Texto */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base font-medium text-cinza-texto"> 
                A <span className="text-dourado">Saboriste</span> nasceu do amor pela confeitaria artesanal e do desejo de proporcionar momentos doces e inesqueciveis para nossos clientes. 
              </p>
              <p className="text-sm sm:text-base font-medium text-cinza-texto">
                Somos especializados em brigadeiros gourmet e trufas premium, todos preparados com ingredientes
                cuidadosamente selecionados e muito carinho.
              </p>
              <p className="text-sm sm:text-base font-medium text-cinza-texto">
                Nosso compromisso é com a qualidade, o sabor autêntico e a apresentação impecável.
                Cada doce é uma obra de arte feita à mão, pensada para transformar suas celebrações em experiencias memoráveis.
              </p>
              <p className="text-sm sm:text-base font-medium text-cinza-texto">
                Na Saboriste, acreditamos que os melhores momentos da vida merecem os melhores doces. 
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Cardápio Section */}
      <section id="cardapio" className="bg-fundo py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-dourado mb-8 sm:mb-10">✨ Cardápio</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {menu.map((item) => (
              <div key={item.id} className="bg-preto-suave rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-cinza-divisor hover:border-dourado">
                <div className="relative w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={item.imagem}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-branco-principal mb-2">{item.name}</h4>
                <p className="text-xl sm:text-2xl font-bold text-dourado">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
