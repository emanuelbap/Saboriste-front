import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
    const menu = [
        {id: "b1", name: "Brigadeiro Tradicional", price: "R$3,50"},
        {id: "b2", name: "Brigadeiro de maracujá", price: "R$4,00"},
        {id: "b3", name: "Brigadeiro de Ferrero Roche", price: "R$4,50"}
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
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-branco-principal">Doces Artesanais que Encantam</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-branco-principal/90">Brigadeiros, bolos e trufas feitos com carinho e ingredientes selecionados</h2>
          <button className="bg-[#E07A5F] hover:bg-[#c9684f] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-lg">
            Encomendar Agora
          </button>
          <p className="mt-4 text-[#E07A5F] text-sm">Entrega disponível sob consulta</p>
        </div>
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="bg-fundo py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dourado mb-10">Quem somos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
              <p className="text-base font-medium text-cinza-texto"> 
                A <span className="text-dourado">Saboriste</span> nasceu do amor pela confeitaria artesanal e do desejo de proporcionar momentos doces e inesqueciveis para nossos clientes. 
              </p>
              <p className="text-base font-medium text-cinza-texto">
                Somos especializados em brigadeiros gourmet e trufas premium, todos preparados com ingredientes
                cuidadosamente selecionados e muito carinho.
              </p>
              <p className="text-base font-medium text-cinza-texto">
                Nosso compromisso é com a qualidade, o sabor autêntico e a apresentação impecável.
                Cada doce é uma obra de arte feita à mão, pensada para transformar suas celebrações em experiencias memoráveis.
              </p>
              <p className="text-base font-medium text-cinza-texto">
                Na Saboriste, acreditamos que os melhores momentos da vida merecem os melhores doces. 
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Destaques Section */}
      <section className="bg-fundo py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-dourado mb-10">✨ Destaques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menu.map((item) => (
              <div key={item.id} className="bg-preto-suave rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-cinza-divisor hover:border-dourado">
                <div className="w-full h-40 bg-chocolate rounded-lg mb-4 flex items-center justify-center text-4xl">
                  🍫
                </div>
                <h4 className="text-xl font-semibold text-branco-principal mb-2">{item.name}</h4>
                <p className="text-2xl font-bold text-dourado">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
