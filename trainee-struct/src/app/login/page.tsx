'use client';
import { useState } from "react";
import { ClosedEyeIcon, EmailIcon, GoogleIcon, OpenEyeIcon, PasswordIcon } from "../_components/icons";
import { Navbar } from "../_components/navbar";

export default function Login() {
    const [seePassword, setSeePassword] = useState(false);

    return (
        <>
        <header>
            <Navbar/>
        </header>
        <main className="bg-[#FFE0EE] min-h-screen flex justify-center">
            <section className="flex flex-col justify-center items-center bg-white w-[450px] h-[535px] rounded-2xl shadow-lg mt-5">
                <form className="flex flex-col items-center w-full max-w-sm gap-[30px] ">

                    {/* Campo de email */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="email" className="text-[0.9rem] font-[700] text-gray-800">Email</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2"><EmailIcon className="text-gray-400"/></span>

                            <input type="email" id="email" required placeholder="seu@email.com" className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" />
                        </div>
                    </div>

                    {/* Campo de senha */}
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="password" className="text-[0.9rem] font-[700] text-gray-800">Senha</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2"><PasswordIcon className="text-gray-400"/></span>

                            <input type={seePassword ? "text" : "password"} id="password" required placeholder="Digite sua senha" className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" />

                            {/* Botão e lógica com useState e useEffect para exibir senha */}
                            <button type="button" onClick={() => setSeePassword(!seePassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                                {seePassword ? <OpenEyeIcon className="text-gray-400 hover:text-gray-800 transition-all duration-150 ease-in-out"/> : <ClosedEyeIcon className="text-gray-400 hover:text-gray-800 transition-all duration-150 ease-in-out"/>}
                            </button>

                        </div>
                    </div>
                    
                    <button type="submit" className="w-full py-3 mt-8 bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] font-medium rounded-xl shadow-sm cursor-pointer hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out">Entrar</button>
                </form>

                <div className="flex items-center justify-center gap-4 w-full max-w-sm my-5">
                    <hr className="grow border-t-gray-300" />
                    <span className=" text-gray-500">ou</span>
                    <hr className="grow border-t-gray-300" />
                </div>

                <button type="button" className="flex justify-center items-center border border-gray-300 rounded-xl w-full max-w-sm max-h-[48px] py-3 text-sm text-gray-800 font-bold cursor-pointer hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out">
                    <GoogleIcon className="mr-2"/> Continuar com Google
                </button>

                <p className="mt-6 text-gray-600">Não tem uma conta? <a href="#" className="text-[#9333EA] text-[0.95rem] font-[600] hover:text-[#52118e]">Cadastre-se</a></p>
            </section>   
        </main>
        </>
    );
}