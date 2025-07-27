'use client';


import { useState, type FC } from "react";
import { Edit, ShoppingCart } from "lucide-react";
import { Navbar } from "../../_components/navbar";
import { useParams } from "next/navigation";
import { api } from "@/trpc/react";
import { EditIcon } from "@/app/_components/icons";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import EditProduto from "@/app/_components/editProduto";
import { NotFound } from "../../_components/icons";
import { useRouter } from 'next/navigation';

// Remove the incorrect import and use ProductCard directly
export default function ProdutoIndividualPage() {
  const router = useRouter();
  const params = useParams();
  const session = useSession();
  const [showEditModal, setShowEditModal] = useState(false);
  
  const idProduto = Number(params.id);

  const {data: produto, isLoading, refetch} = api.produto.getById.useQuery({id: idProduto});
  const addToCartMutation = api.cart.addItem.useMutation();


  const handleUpdate = () => {
    setShowEditModal(false);
    refetch();  // necessário para recerregar os dados do produto assim que a edição é bem sucedida
    toast.success('Produto adicionado com sucesso!');
  };

  // Add to cart function
  const handleAddToCart = async (redirectToCheckout = false) => {
    if (session.status !== 'authenticated') {
      toast.error('Usuario não autenticado');
      router.push('/login');
      return;
    }

    try {
      await addToCartMutation.mutateAsync({
        produtoId: idProduto,
        quantidade: 1,
      });
      
      toast.success('Produto adicionado ao carrinho!');
      
      if (redirectToCheckout) {
        router.push('/checkout');
      }
    } catch (error) {
      toast.error('Erro ao adicionar produto ao carrinho');
    }
  };

  // Loading screen
  if (isLoading || session.status === 'loading') {
    return(
      <>
        <header>
          <Navbar/>
        </header>

        <main className="flex flex-col items-center bg-[#FFE0EE] min-h-screen px-1">
          <div className="flex-grow"/>
        </main>
      </>
    );
  }

  // No product found for this id
  if (!produto) {
          return(
              <>
                  <header>
                      <Navbar/>
                  </header>
  
                  <main className="flex flex-col items-center bg-[#FFE0EE] min-h-screen px-1">
                      <h1 className="text-2xl sm:text-3xl text-[#0F172A] font-bold mt-4 sm:mt-7 sm:mb-4">Catálogo de Produtos</h1>
                      <p className="text-xs sm:text-base text-[#374151] mt-3 mb-5 px-5">Descubra nossa seleção premium de produtos de papelaria</p>
  
                      <div className="flex justify-center items-center gap-2 text-[#4B5563]">
                          <NotFound className="w-10 h-10"/>
                          <p className="text-lg font-bold">Nenhum produto encontrado</p>
                      </div>
                  </main>
              </>
          );
      }

  
  const especificacoesAux = produto.especificacoes ? produto.especificacoes : undefined;  // Variável auxiliar necessária para ser enviada como parâmetro no componente de edição de produtos

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return(
    <>
    <header>
      <Navbar/>
    </header>

    <main className="min-h-screen flex justify-center bg-[#FFE0EE] p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl md:max-h-[550px] my-5">

        {/* Imagem */}
        <div className="relative flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-blue-100">
          <img 
            src={produto.imagem} 
            alt={produto.nome} 
            className="w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-xl shadow-inner object-cover object-center"
          />
          {(session.status === 'authenticated' && session.data.user.role === 'ADMIN') && (
          <button 
            onClick={() => {
              setShowEditModal(true);
            }}
            className="absolute top-2 right-2 flex items-center justify-center bg-white w-10 sm:w-12 h-10 sm:h-12 rounded-full shadow cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">
            <EditIcon className="text-gray-400 hover:text-[#1F2937]"/>
          </button>  
          )}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-8 relative flex flex-col justify-center space-y-8">

          <h2 className="text-2xl font-bold text-gray-800">
            {produto.nome}
          </h2>
          <p className="text-xl font-semibold text-gray-900">
            R$ {precoFormatado}
          </p>
          <p className="text-gray-600 break-all line-clamp-3">
            {produto.descricao}
          </p>

          <div>
            <p className="font-semibold text-gray-700">
              Especificações:
            </p>
            <p className="text-gray-800 mb-6 break-all line-clamp-3">
              {produto.especificacoes}
            </p>
          </div>

          {/* Botões */}
            <div className="space-y-3">
              <button 
                onClick={() => handleAddToCart(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-blue-300 text-white font-medium py-2 rounded-xl shadow hover:opacity-90 cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out"
              >
                <ShoppingCart className="w-5 h-5" />
                Adicionar ao Carrinho
              </button>
              <button 
                onClick={() => handleAddToCart(true)}
                className="w-full bg-gradient-to-r from-purple-400 to-blue-300 text-white font-medium py-2 rounded-xl shadow hover:opacity-90 cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out"
              >
                Comprar Agora
              </button>
            </div>
        </div>
      </div>

      {showEditModal && (
        <EditProduto
          onConfirm={() => {handleUpdate()}}
          onClose={() => {setShowEditModal(false)}}
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          descricao={produto.descricao}
          especificacoes={especificacoesAux}
        />
      )}
    </main>
    </>
  ); 
}