"use client";
import Link from "next/link";
import { useState } from "react";
import { SearchIcon, UserIcon, CartIcon } from "./icons";


export function Navbar() {
    const [countCarrinho, setCountCarrinho] = useState(0);
    // Fazer lógica para incremento do contador do carrinho aqui

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="relative flex flex-wrap justify-between items-center min-h-[70px] px-3 sm:px-4 md:px-6 shadow-sm">
            <Link 
                href="/" 
                className="text-[#1F2937] text-sm sm:text-md md:text-lg lg:text-xl font-extrabold hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
            >
                Papelaria dos Cria
            </Link>

            <div className="relative w-full max-w-[175px] sm:max-w-[270px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[400px]">
                <input 
                    type="text"  
                    placeholder="Buscar produtos..." 
                    className="w-full border border-gray-300 rounded-lg text-gray-500 text-sm pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />

                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIcon className="w-5 h-5 text-gray-400"/>
                </div>
            </div>

            {/* Botão para Menu Hamburguer */}
            <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="md:hidden flex flex-col justify-between items-center w-[30px] h-5 cursor-pointer group active:scale-[0.97] transition-all duration-300 ease-in-out"
            >
                <span className="block w-full h-[3px] bg-[#DDA0DD] group-hover:bg-[#e184e1] transition-all duration-300 ease-in-out"></span>
                <span className="block w-full h-[3px] bg-[#DDA0DD] group-hover:bg-[#e184e1] transition-all duration-150 ease-in-out"></span>
                <span className="block w-full h-[3px] bg-[#DDA0DD] group-hover:bg-[#e184e1] transition-all duration-50 ease-in-out"></span>
            </button>


            {/* Estilização de links para telas maiores (sem menu hamburguer)*/}
            <ul className="hidden md:flex md:justify-center md:items-center md:flex-wrap md:gap-3 lg:gap-8">
                <li>
                    <Link 
                        href="/produtos" 
                        className="flex justify-center items-center bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-xs lg:text-sm xl:text-base font-bold min-h-[40px] lg:min-h-[43px] xl:min-h-[45px] px-3 lg:px-4 xl:px-5  rounded-lg hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
                    >
                        Produtos
                    </Link>
                </li>
                <li className="">
                    <Link 
                        href="/login" 
                        className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-xs lg:text-sm xl:text-base font-bold min-h-[40px] lg:min-h-[43px] xl:min-h-[45px] px-3 lg:px-4 xl:px-5 rounded-lg hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
                    >
                        <span><UserIcon className="w-4 h-4 lg:w-6 lg:h-6 text-[#5A5C8F]"/></span>
                        Login
                    </Link>
                </li>
                <li className="relative">
                    <Link 
                        href="/checkout" 
                        className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-xs lg:text-sm xl:text-base font-bold min-h-[40px] lg:min-h-[43px] xl:min-h-[45px] px-3 lg:px-4 xl:px-5  rounded-lg hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
                    >
                        <span><CartIcon className="w-4 h-4 lg:w-6 lg:h-6 text-[#5A5C8F]"/></span>
                        Carrinho
                    </Link>
                    <span className="absolute -top-2 -right-3 w-6 h-6 lg:w-7 lg:h-7 flex justify-center items-center rounded-full bg-[#EF4444] text-[#5A5C8F] text-lg font-bold">{countCarrinho}</span>
                </li>
            </ul>

            {/* Estilização de links para telas menores (aparece quando o hamburguer é clicado) */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 shadow-sm rounded-b-xl">
                    <ul className="flex flex-col items-center py-4 gap-4">
                        <li>
                            <Link 
                                href="/produtos" 
                                className="text-[#5A5C8F] font-bold hover:text-[#696a9a]"
                            >
                                Produtos
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/login" 
                                className="text-[#5A5C8F] font-bold hover:text-[#696a9a]"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/checkout" 
                                className="text-[#5A5C8F] font-bold hover:text-[#696a9a]"
                            >
                                Carrinho
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}