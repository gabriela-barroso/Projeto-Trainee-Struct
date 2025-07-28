'use client';

import Link from "next/link";

type Props = {
    imagemURL: string;
    nome: string;
    preco: number;
}

export function CardProduto({imagemURL, nome, preco} : Props) {

    const precoFormatado = preco.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return(
        <div className="flex flex-col items-center gap-3 bg-white w-[150px] sm:w-[250px] lg:w-[300px] h-[270px] sm:h-[390px] lg:h-[440px] rounded-lg shadow">
            <Link href='#' className="w-full">  {/* Fazer lógica de levar para página de descrição do produto aqui */}
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        src={imagemURL}
                        alt={nome}
                        className="w-full h-full rounded-t-lg object-cover object-center"
                    />
                </div>
                <div className="flex flex-col max-w-[120px] sm:max-w-[200px] lg:max-w-[250px] mx-auto gap-2 mt-3">
                    <p className="text-[#1F2937] text-sm sm:text-lg lg:text-xl font-bold truncate">
                        {nome}
                    </p>
                    <p className="text-[#4B5563] text-sm sm:text-lg lg:text-xl font-bold truncate">
                        R$ {precoFormatado}
                    </p>
                </div>
            </Link>
            

            <button className="bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] w-full max-w-[120px] sm:max-w-[200px] lg:max-w-[250px] h-[35px] rounded-lg text-[#696a9a] text-sm sm:text-lg lg:text-xl font-bold cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">
                Comprar
            </button>

        </div>
    )
};