type Props = {
    imagemURL: string | undefined;
    nome: string;
    preco: number;
}

export function CardProduto({imagemURL, nome, preco} : Props) {

    return(
        <div className="flex flex-col items-center gap-3 bg-white w-full max-w-[300px] min-h-[300px] rounded-lg">
            <img 
                src={imagemURL} 
                alt={nome} 
                className="w-full h-[130px] rounded-t-lg"    
            />

            <p>{nome}</p>

            <p>{preco}</p>

            <button className="bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] w-full max-w-[250px] h-[35px] rounded-lg text-[#696a9a] text-xl font-bold cursor-pointer active:scale-[0.97] transition-transform duration-75 ease-in-out">Comprar</button>
        </div>
    )
};