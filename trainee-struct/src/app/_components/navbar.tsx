"use client";
import { useState } from "react";
import { SearchIcon, UserIcon, CartIcon } from "./icons";


export function Navbar() {
    const [countCarrinho, setCountCarrinho] = useState(0);
    // Fazer lógica para incremento do contador do carrinho aqui
    return (
        <nav className="flex flex-wrap justify-between items-center min-h-[70px] px-6 shadow-sm">
            <h1 className="text-[#1F2937] text-sm sm:text-base md:text-lg lg:text-xl font-extrabold">Papelaria dos Cria</h1>

            <div className="relative w-full sm:max-w-sm md:max-w-md lg:max-w-[500px]">
                <input type="text"  placeholder="Buscar produtos..." className="w-full border border-gray-300 rounded-lg text-gray-500 text-sm pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"/>

                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIcon className="w-5 h-5 text-gray-400"/>
                </div>
            </div>


            <ul className="flex justify-center items-center flex-wrap gap-8">
                <li>
                    <a href="#" className="flex justify-center items-center bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-base font-bold min-h-[45px] px-5 rounded-lg">Produtos</a>
                </li>
                <li className="">
                    <a href="#" className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-base font-bold min-h-[45px] px-5 rounded-lg">
                        <span><UserIcon className="w-6 h-6 text-[#5A5C8F]"/></span>
                        Login
                    </a>
                </li>
                <li className="relative">
                    <a href="#" className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-base font-bold min-h-[45px] px-5 rounded-lg">
                        <span><CartIcon className="w-6 h-6 text-[#5A5C8F]"/></span>
                        Carrinho
                    </a>
                    <span className="absolute -top-2 -right-3 w-7 h-7 flex justify-center items-center rounded-full bg-[#EF4444] text-[#5A5C8F] text-lg font-bold">{countCarrinho}</span> {/*ESTILIZAR CONTADOR DO CARRINHO AQUI*/}
                </li>
            </ul>
        </nav>
    );
}

/**
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75" stroke="#5A5C8F" stroke-width="1.575" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8.24982C10.6569 8.24982 12 6.90667 12 5.24982C12 3.59296 10.6569 2.24982 9 2.24982C7.34315 2.24982 6 3.59296 6 5.24982C6 6.90667 7.34315 8.24982 9 8.24982Z" stroke="#5A5C8F" stroke-width="1.575" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</svg>

 */