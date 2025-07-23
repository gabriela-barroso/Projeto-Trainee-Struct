type Props = {
    imagemURL: string;
    nome: string;
    preco: number;
}

export function CardProduto({imagemURL, nome, preco} : Props) {

    return(
        <div className="flex flex-col items-center gap-3 bg-white w-[300px] h-[430px] rounded-lg shadow">
            <div className="w-full aspect-square overflow-hidden">
                <img
                    src={imagemURL}
                    alt={nome}
                    className="w-full h-full rounded-t-lg object-cover object-center"
                />
            </div>

            <div className="flex flex-col w-full max-w-[250px] gap-2">
                <p className="text-[#1F2937] text-xl font-bold">{nome}</p>
                <p className="text-[#4B5563] text-xl font-bold">R$ {preco}</p>
            

            <button className="bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] w-full h-[35px] rounded-lg text-[#696a9a] text-xl font-bold cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">Comprar</button>

            </div>
        </div>
    )
};