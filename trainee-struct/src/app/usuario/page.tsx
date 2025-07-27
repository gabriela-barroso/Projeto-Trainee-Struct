'use client';

import { Navbar } from "../_components/navbar";
import Image from 'next/image';
import { useSession } from "next-auth/react";

export default function Usuario() {

    const { data: session, status } = useSession();

    if (status === "loading"){

        return (
            <>
              <header>
                  <Navbar/>
              </header>
              <main className= "min-h-screen flex justify-center items-center bg-[#FFE0EE]" >
                <section className="flex flex-col justify-center items-center bg-white w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[535px] rounded-2xl shadow-lg my-8 mx-2">
                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#5A5C8F]"/>
                </section>
              </main>                
            </>
        ) 

    }
        

    if (!session) {

        return(
            <>
              <header>
                  <Navbar/>
              </header>
              <main className= "min-h-screen flex justify-center items-center bg-[#FFE0EE]" >
                <section className="flex flex-col justify-center items-center bg-white w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[535px] rounded-2xl shadow-lg my-8 mx-2">
                    <p>Necessário login!</p>
                </section>
              </main>              
            
            
            </>
        )
        
    }
        

    const user = session.user;

    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main className= "min-h-screen flex justify-center bg-[#FFE0EE]">
                <section className="flex flex-col items-center bg-white w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[535px] rounded-2xl shadow-lg my-8 mx-2">
                    
                    <div className="pt-18 items-center flex flex-col">

                        <h1 className= "text-[30px] font-bold text-[#0F172A] pb-15">
                            Minha Conta
                        </h1>
                        <img
                            src={user.image ?? "/imagens/usuario.png"}
                            alt="Foto de perfil"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        <h1 className="text-[14px] font-bold text-[#374151] pt-7 pb-5">
                            {user.name}
                        </h1>
                        <div className=" bg-[#EFF0F5] rounded-2xl h-17.5 w-72.5 flex flex-row justify-center items-center " >
                            
                            <img src="/imagens/email.png" alt="" className="h-8 w-7 " />

                            <div className="justify-center items-center">
                                <p className="text-[12px] text-[#9696A6] h-5 w-20 pl-3 "> E-mail </p>
                    
                                <p className="text-[#374151] text-[14px] pl-3 "> {user.email} </p>
                            </div>
                        
                        </div>                          
                    </div>

                </section>
            </main>
        
        
        </>
    )
}