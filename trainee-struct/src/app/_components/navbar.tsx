"use client";
import { useState } from "react";
import { SearchIcon, UserIcon, CartIcon } from "./icons";


export function Navbar() {
    const [countCarrinho, setCountCarrinho] = useState(0);
    // Fazer lógica para incremento do contador do carrinho aqui

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="relative flex flex-wrap justify-between items-center min-h-[70px] px-3 sm:px-4 md:px-6 shadow-sm">
            <h1 className="text-[#1F2937] text-sm sm:text-md md:text-lg lg:text-xl font-extrabold">Papelaria dos Cria</h1>

            <div className="relative w-full max-w-[175px] sm:max-w-[270px] md:max-w-[250px] lg:max-w-[350px]">
                <input type="text"  placeholder="Buscar produtos..." className="w-full border border-gray-300 rounded-lg text-gray-500 text-sm pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"/>

                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIcon className="w-5 h-5 text-gray-400"/>
                </div>
            </div>

            {/* Botão para Menu Hamburguer */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer border-t-[3px] border-t-solid border-t-[#DDA0DD] 
            before:content-[''] before:block before:w-[30px] before:h-[3px] before:bg-[#DDA0DD] before:mt-[5px]
            after:content-[''] after:block after:w-[30px] after:h-[3px] after:bg-[#DDA0DD] after:mt-[5px]
            "></button>


            {/* Estilização de links para telas maiores (sem menu hamburguer)*/}
            <ul className="hidden md:flex md:justify-center md:items-center md:flex-wrap md:gap-3 lg:gap-8">
                <li>
                    <a href="#" className="flex justify-center items-center bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-xs lg:text-base font-bold min-h-[40px] lg:min-h-[45px] px-3 lg:px-5 rounded-lg">Produtos</a>
                </li>
                <li className="">
                    <a href="#" className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-xs lg:text-base font-bold min-h-[40px] lg:min-h-[45px] px-3 lg:px-5 rounded-lg">
                        <span><UserIcon className="w-4 h-4 lg:w-6 lg:h-6 text-[#5A5C8F]"/></span>
                        Login
                    </a>
                </li>
                <li className="relative">
                    <a href="#" className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-xs lg:text-base font-bold min-h-[40px] lg:min-h-[45px] px-3 lg:px-5 rounded-lg">
                        <span><CartIcon className="w-4 h-4 lg:w-6 lg:h-6 text-[#5A5C8F]"/></span>
                        Carrinho
                    </a>
                    <span className="absolute -top-2 -right-3 w-6 h-6 lg:w-7 lg:h-7 flex justify-center items-center rounded-full bg-[#EF4444] text-[#5A5C8F] text-lg font-bold">{countCarrinho}</span> {/*ESTILIZAR CONTADOR DO CARRINHO AQUI*/}
                </li>
            </ul>

            {/* Estilização de links para telas menores (aparece quando o hamburguer é clicado) */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 shadow-sm">
                    <ul className="flex flex-col items-center py-4 gap-4">
                        <li>
                            <a href="#" className="text-[#5A5C8F] font-bold">Produtos</a>
                        </li>
                        <li>
                            <a href="#" className="text-[#5A5C8F] font-bold">Login</a>
                        </li>
                        <li>
                            <a href="#" className="text-[#5A5C8F] font-bold">Carrinho</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}