import { Navbar } from "../_components/navbar";

export default function Admin() {
    return(
        <>
            <header className="bg-white">
                <Navbar/>
            </header>
            <main className="h-screen flex justify-center bg-[#FFE0EE]">
                <section className="flex flex-col justify-center items-center w-full max-w-[900px] h-[590px] sm:h-[550px] mx-2 sm:mx-5 my-8 bg-white rounded-lg shadow-md">
                    <h1 className="font-bold text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] px-2 text-[#1F2937]">
                        Painel Administrativo
                    </h1>
                    <p className="text-[#4b5563] text-[0.8rem] sm:text-sm md:text-base mb-7">
                        Adicionar Novo Produto
                    </p>
                    <form className="flex flex-col justify-center gap-5 w-full max-w-[890px] px-2.5 sm:px-5 text-[#374151] text-[0.8rem] sm:text-sm md:text-[0.9rem] font-bold">
                        <div className="flex flex-col sm:flex-row sm: gap-4 w-full">
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="nomeProduto">
                                    Nome do Produto *
                                </label>
                                <input 
                                    type="text"
                                    id="nomeProduto" 
                                    required 
                                    className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm py-[7px] sm:py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                                />
                            </div>

                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="valorProduto">
                                    Valor (R$) *
                                </label>
                                <input 
                                    type="number" 
                                    min={0}
                                    step={0.01}
                                    id="valorProduto" 
                                    required 
                                    className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm py-[7px] sm:py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gray-200 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="urlImagem">
                                URL da Imagem
                            </label>
                            <input 
                                type="url" 
                                id="urlImagem" 
                                className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm py-[7px] sm:py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="descricao">
                                Descrição *
                            </label>
                            <input 
                                type="text" 
                                id="descricao" 
                                required 
                                className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm py-[7px] sm:py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="especificacoes">
                                Especificações Técnicas
                            </label>
                            <input 
                                type="text" 
                                id="especificacoes" 
                                className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm py-[7px] sm:py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                            />
                        </div>

                        <div className="flex gap-4 justify-between items-center w-full h-[35px] sm:h-[40px] mt-3">
                            <button 
                                type="submit" 
                                className="flex-1 h-full bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-white font-medium rounded-xl shadow-sm cursor-pointer hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
                            >
                                Adicionar Produto
                            </button>

                            <button 
                                type="reset" 
                                className="flex-1 h-full border border-gray-300 rounded-xl text-[#374151] font-medium cursor-pointer hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
                            >
                                Limpar Campos
                            </button>   
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
} 