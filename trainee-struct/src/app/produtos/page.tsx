'use client';

import { api } from "@/trpc/react";
import { CardProduto } from "../_components/cardProduto";
import { Navbar } from "../_components/navbar";


export default function Produtos () {

    const {data: produtos, isLoading} = api.produto.getAll.useQuery();

    if (isLoading) return <div>Carregando...</div>;
    if (!produtos || produtos.length === 0) return <div>Nenhum produto encontrado.</div>;

    return(
        <>
        <header>
            <Navbar/>
        </header>

        <main className="flex flex-col items-center bg-[#FFE0EE] h-full">
            <h1 className="text-3xl text-[#0F172A] font-bold mt-7 mb-4">Catálogo de Produtos</h1>

            <p className="text-[#374151] my-3">Descubra nossa seleção premium de produtos de papelaria</p>

            <section className="flex items-center justify-center gap-10 w-full max-w-[1000px] flex-wrap">
                {produtos.map((produto) => (
                    <CardProduto
                        imagemURL={produto.imagem}
                        nome={produto.nome}
                        preco={produto.preco}
                    />
                ))}
            </section>
            
        </main>
        </>

    );
}