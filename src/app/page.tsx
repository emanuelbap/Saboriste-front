import Header from "@/components/Header";

export default function Home() {
    const menu = [
        {id: "b1", name: "Brigadeiro Tradicional", price: "R$3,50"},
        {id: "b2", name: "Brigadeiro de maracujá", price: "R$4,00"},
        {id: "b3", name: "Brigadeiro de Ferrero Roche", price: "R$4,50"}
    ];
  return (
    <main className="min-h-screen bg-pink-900">
      <Header />
      
      <section className="bg-gradient-to-r from-pink-400 to-pink-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Doces Artesanais que Encantam</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-pink-100">Brigadeiros, bolos e trufas feitos com carinho e ingredientes selecionados</h2>
          <button className="from-pink-400 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-pink-900 transition-colors shadow-lg">
            Encomende Agora
          </button>
        </div>
      </section>

      {/* Destaques Section */}
      <section className=" bg-pink-300 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-10">✨ Destaques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menu.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-pink-100">
                <div className="w-full h-40 bg-pink-200 rounded-lg mb-4 flex items-center justify-center text-4xl">
                  🍫
                </div>
                <h4 className="text-xl font-semibold text-pink-800 mb-2">{item.name}</h4>
                <p className="text-2xl font-bold text-pink-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
