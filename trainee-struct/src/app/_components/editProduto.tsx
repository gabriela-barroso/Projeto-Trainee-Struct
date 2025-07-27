'use client';

import { api } from "@/trpc/react";
import { useState } from "react";
import { XIcon } from "./icons";
import DeleteProduto from "./deleteProduto";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {
    onConfirm: () => void;
    onClose: () => void;
    id: number; 
    nome: string; 
    preco: number;
    imagem: string;
    descricao: string; 
    especificacoes?: string;
}

export default function EditProduto({onConfirm, onClose, id, nome, preco, imagem, descricao, especificacoes} : Props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    
    const [nomeProduto, setNomeProduto] = useState(nome);
    const [valorProduto, setValorProduto] = useState(preco);
    const [imagemProduto, setImagemProduto] = useState((imagem === "/imagens/sem_imagem.jpg") ? "" : imagem);
    const [descricaoProduto, setDescricaoProduto] = useState(descricao);
    const [especificacaoProduto, setEspecificacaoProduto] = useState(especificacoes ? especificacoes : "");

    const router = useRouter();

    const updateProduto = api.produto.update.useMutation({
        onSuccess: () => {
            onConfirm();
        },
    });

    const handleSubmit = () => {
        if (!nomeProduto || !valorProduto || !descricaoProduto) return;
        updateProduto.mutate({
            id: id,
            nome: nomeProduto,
            preco: valorProduto,
            imagem: imagemProduto ? imagemProduto : "/imagens/sem_imagem.jpg",
            descricao: descricaoProduto,
            especificacoes: especificacaoProduto,
        })
    }

    const handleDelete = () => {
        setShowDeleteModal(false);
        router.replace('/produtos');
        toast.success('Produto deletado com sucesso!');
    }

    return(
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
            <div className="relative flex flex-col justify-center items-center gap-10 w-full max-w-[900px] h-[590px] sm:h-[550px] mx-2 sm:mx-5 my-5 bg-white rounded-3xl shadow-md">
                <button 
                    onClick={() => onClose()}
                    className="absolute top-4 right-4 cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">
                    <XIcon className="w-8 h-8 text-gray-400 hover:text-[#1F2937]"
                />
                </button>
                <h1 className="font-bold text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] px-2 text-[#1F2937]">
                    Editar Produto
                </h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();  // Necessário para a página não ser carregada ao submeter o form
                        handleSubmit();
                    }}
                    className="flex flex-col justify-center gap-5 w-full max-w-[890px] px-2.5 sm:px-5 text-[#374151] text-[0.8rem] sm:text-sm md:text-[0.9rem] font-bold"
                >
                    <div className="flex flex-col sm:flex-row sm: gap-4 w-full">
                        <div className="flex-1 flex flex-col gap-2">
                            <label htmlFor="nomeProduto">
                                Nome do Produto *
                            </label>
                            <input
                                type="text"
                                id="nomeProduto"
                                required
                                value={nomeProduto}
                                onChange={(e) => setNomeProduto(e.target.value)}
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
                                value={valorProduto}
                                onChange={(e) => setValorProduto(Number(e.target.value))}
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
                            value={imagemProduto}
                            onChange={(e) => setImagemProduto(e.target.value)}
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
                            value={descricaoProduto}
                            onChange={(e) => setDescricaoProduto(e.target.value)}
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
                            value={especificacaoProduto}
                            onChange={(e) => setEspecificacaoProduto(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg text-gray-600 text-sm py-[7px] sm:py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
                        />
                    </div>
                    <div className="flex gap-4 justify-between items-center w-full h-[35px] sm:h-[40px] mt-3">
                        <button
                            type="submit"
                            className="flex-1 h-full bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-white font-medium rounded-xl shadow-sm cursor-pointer hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out"
                        >
                            Salvar Alterações
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setShowDeleteModal(true);
                            }}
                            className="flex-1 h-full border border-gray-300 rounded-xl text-[#374151] font-medium cursor-pointer hover:text-red-500 active:scale-[0.97] transition-transform duration-75 ease-in-out"
                        >
                            Excluir
                        </button>
                    </div>
                </form>
            </div>
            
            {showDeleteModal && (
                <DeleteProduto
                    onConfirm={() => {handleDelete()}}
                    onClose={() => {setShowDeleteModal(false)}}
                    id={id}
                    nome={nome}
                />
            )}
        </div>
    );
}