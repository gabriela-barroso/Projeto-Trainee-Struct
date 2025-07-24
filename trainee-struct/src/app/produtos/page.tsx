'use client';

import { api } from "@/trpc/react";
import { CardProduto } from "../_components/cardProduto";
import { Navbar } from "../_components/navbar";
import { useState } from "react";


export default function Produtos () {

    const {data: produtos, isLoading} = api.produto.getAll.useQuery();
    const [cardsVisiveis, setCardsVisiveis] = useState(6);

    const totalProdutos = produtos?.length ?? 0;

    const maisProdutos = () => {
        setCardsVisiveis((prev) => Math.min(prev + 6, totalProdutos))
    };

    if (isLoading) return <div>Carregando...</div>;
    if (!produtos || produtos.length === 0) return <div>Nenhum produto encontrado.</div>;

    return(
        <>
        <header>
            <Navbar/>
        </header>

        <main className="flex flex-col items-center bg-[#FFE0EE] h-full px-1">
            <h1 className="text-2xl sm:text-3xl text-[#0F172A] font-bold mt-4 sm:mt-7 sm:mb-4">Catálogo de Produtos</h1>

            <p className="text-xs sm:text-base text-[#374151] my-3 px-5">Descubra nossa seleção premium de produtos de papelaria</p>

            <section className="flex items-center justify-center gap-3 sm:gap-10 w-full max-w-[1000px] mb-5 flex-wrap">
                {produtos.slice(0, cardsVisiveis).map((produto) => (
                    <CardProduto
                        key={produto.id}
                        imagemURL={produto.imagem}
                        nome={produto.nome}
                        preco={produto.preco}
                    />
                ))}
            </section>
            
            {totalProdutos > cardsVisiveis && (
            <button
                onClick={maisProdutos}
                className="bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] px-5 sm:px-10 py-3 my-5 sm:my-10 rounded-lg text-[#696a9a] text-sm sm:text-lg lg:text-xl font-bold cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">
                Ver mais produtos
            </button>       
            )}
            
        </main>
        </>

    );
}