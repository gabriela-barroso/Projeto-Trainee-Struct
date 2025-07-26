import type { FC } from "react";
import { ShoppingCart } from "lucide-react";
import { Navbar } from "../_components/navbar";

// Remove the incorrect import and use ProductCard directly
export default function ProdutoIndividualPage() {
  return(
    <>
    <header>
      <Navbar/>
    </header>

    <ProductCard />;
    </>
  ); 
}




const ProductCard: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl">

        {/* Imagem */}
        <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-blue-100">
          <div className="w-60 h-60 rounded-xl bg-gradient-to-br from-purple-200 to-blue-200 shadow-inner" /> {/* COLOCAR IMAGEM AQUI */}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-8 relative">

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Caderno Fofo</h2> {/* NOME AQUI */}
          <p className="text-xl font-semibold text-gray-900 mb-2">R$ 19,90</p>    {/* PREÇO AQUI */}
          <p className="text-gray-600 mb-4">
            Aqui vai a descricao do produto                                         {/* DESCRIÇÃO AQUI */}
          </p>

          <p className="font-semibold text-gray-700 mb-1">Especificações:</p>     {/* ESPECIFICAÇÕES AQUI */}
          <p className="text-gray-800 mb-6">90 páginas; capa dura;</p>             

          {/* Botões */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-blue-300 text-white font-medium py-2 rounded-xl shadow hover:opacity-90 transition">
              <ShoppingCart className="w-5 h-5" />
              Adicionar ao Carrinho
            </button>
            <button className="w-full bg-gradient-to-r from-purple-400 to-blue-300 text-white font-medium py-2 rounded-xl shadow hover:opacity-90 transition">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


