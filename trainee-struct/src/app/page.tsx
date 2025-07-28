'use client';
import { useState, type Key } from "react";
import { Navbar } from "./_components/navbar";
import Link from "next/link";
import Image from 'next/image';
import { api } from "@/trpc/react";
import { CardProduto } from "./_components/cardProduto";

export default function HomePage() {

    const {data: produtos,isLoading} = api.produto.getAll.useQuery();
    const totalProdutos = !produtos ? 0 : produtos.length;

    if (isLoading){

        return(
            <>
              <header>
                  <Navbar/>
              </header>
              <main className= "min-h-screen flex justify-center items-center bg-[#FFE0EE]" >
                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-white"/>
              </main>
            </>
        )
    }

    if (!produtos || totalProdutos === 0) {

        return(
            <>
              <header>
                  <Navbar/>
              </header>

              <main className= "min-h-screen flex justify-center bg-[#FFE0EE]">
                  <section className="text-center">
                      <h1 className= "text-[35.44px] font-bold text-[#0F172A] pt-5">
                          artigos de papelaria que inspiram! 
                      </h1>
                      <p className= "text-[16.59px] font-inter text-[#374151] pt-5 pb-10">
                          Encontre tudo que você precisa para seus estudos e trabalho.
                      </p>
                      <Link href="/produtos">
                          <button className="cursor-pointer justify-center items-center bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-[14.88px] lg:text-[16px] xl:text-[17px] font-bold min-h-[50px] lg:min-h-[53px] xl:min-h-[55px] px-5 lg:px-6 xl:px-7  rounded-lg hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out">
                              Ofertas Especiais
                          </button>
                      </Link>
                      <h2 className= "text-[19.22px] font-inter font-bold text-[#0F172A] pt-10 pb-10">
                          Produtos em Destaque
                      </h2>
                      <div className="flex justify-center items-center gap-2 text-[#4B5563]">
                          <Image src="/imagens/lupa.png" alt="" width={20} height={20}/>
                          <p className="text-[12px] font-bold">
                              Nenhum produto encontrado!
                          </p>
                      </div>
                  </section>
              </main>
            </>
        );
    }

    return(
        <>
          <header>
            <Navbar/>
          </header>

          <main className= "min-h-screen flex justify-center bg-[#FFE0EE]">
              <section className="text-center">
                  <h1 className= "text-[35.44px] font-bold text-[#0F172A] pt-10">
                      Artigos de papelaria que inspiram! 
                  </h1>
                  <p className= "text-[16.59px] font-inter text-[#374151] pt-3 pb-13">
                      Encontre tudo que você precisa para seus estudos e trabalho.
                  </p>
                  <Link href="/produtos">
                      <button className="cursor-pointer justify-center items-center bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-[14.88px] lg:text-[16px] xl:text-[17px] font-bold min-h-[50px] lg:min-h-[53px] xl:min-h-[55px] px-5 lg:px-6 xl:px-7  rounded-lg hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out">
                          Ofertas Especiais
                      </button>
                  </Link>
                  <h2 className= "text-[19.22px] font-inter font-bold text-[#0F172A] pt-13 pb-5">
                      Produtos em Destaque
                  </h2>
                  <div className="flex items-center justify-center gap-3 sm:gap-10 w-full max-w-[1000px] mb-5 flex-wrap pb-15">
                      {produtos.slice(0, 3).map((produto: { id: number; imagem: string; nome: string; preco: number; }) => (
                          <CardProduto
                              key={produto.id}
                              id={produto.id}
                              imagemURL={produto.imagem}
                              nome={produto.nome}
                              preco={produto.preco}
                          />
                      ))}
                  </div>

              </section>

          </main>
          
          
        </>

    );
}