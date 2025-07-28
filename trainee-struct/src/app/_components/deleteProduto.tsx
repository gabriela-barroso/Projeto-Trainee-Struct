'use client';

import { api } from "@/trpc/react";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
    onConfirm: () => void;
    onClose: () => void;
    id: number; 
    nome: string;
}

export default function DeleteProduto({onConfirm, onClose, id, nome} : Props) {
    const deleteProduto = api.produto.delete.useMutation({
        onSuccess: () => {
            onConfirm();
        },
    })

    const handleSubmit = () => {
        deleteProduto.mutate({id : id})
    }

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-lg rounded-3xl p-5 shadow-md mx-2 sm:mx-5 my-5">
                <h1 className="font-bold text-red-500 text-lg sm:text-xl mb-4">Remover produto</h1>

                <div className="flex justify-between gap-6">
                    <div className="flex flex-col gap-2 w-full">
                        <p className="text-gray-800 text-sm sm:text-base break-all">
                            Tem certeza de que deseja remover o produto <span className="font-bold">"{nome}"</span> do sistema?
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-5 h-9 sm:h-10 max-w-">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 h-full border border-gray-300 rounded-xl text-[#374151] text-sm sm:text-base font-medium cursor-pointer hover:text-green-500 active:scale-[0.97] transition-transform duration-75 ease-in-out"
                    >
                        Sim
                    </button>
                    <button
                        onClick={() => {onClose()}}
                        className="flex-1 h-full border border-gray-300 rounded-xl text-[#374151] text-sm sm:text-base font-medium cursor-pointer hover:text-red-500 active:scale-[0.97] transition-transform duration-75 ease-in-out"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}