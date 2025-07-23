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

        <main className="flex flex-col items-center justify-center bg-[#FFE0EE] h-screen">
            <h1>Catálogo de Produtos</h1>

            <section className="flex items-center justify-between w-full max-w-[1000px] flex-wrap">
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