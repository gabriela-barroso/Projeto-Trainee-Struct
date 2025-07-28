import Link from "next/link";

export default function Unauthorized() {
    return(
        <main className="bg-black min-h-screen flex flex-col gap-5 items-center justify-center">
            <p className="text-white text-lg font-bold">
                401 | Unauthorized
            </p>

            <Link 
                href={'/'}
                className="text-white cursor-pointer"
            >
                Ir para a página inicial
            </Link>
        </main>
    );
}