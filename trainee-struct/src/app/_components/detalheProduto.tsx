import type React from "react";
import { XIcon } from "./icons";

type Props = {
    children : React.ReactNode; 
    onClose: () => void;
}

export default function DetalheProduto({children, onClose} : Props) {
    return(
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
            <div className="relative flex flex-col bg-white shadow rounded-3xl w-full max-w-lg gap-5 p-5 mx-2 sm:mx-5 my-5">
                <button 
                    onClick={() => onClose()}
                    className="absolute top-3 right-3 cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">
                    <XIcon className="w-7 h-7 text-gray-400 hover:text-[#1F2937]"
                />
                </button>
                {children}
            </div>
        </div>
    );
}