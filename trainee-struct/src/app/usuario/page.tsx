'use client';

import { Navbar } from "../_components/navbar";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Usuario() {

    const { data: session, status } = useSession();
    const isAuthenticated = status === "authenticated";
    const userRole = session?.user?.role;


    //se ainda estiver carregando
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
        
    //se não estiver autenticado
    if (!session) {

        return(
            <>
              <header>
                  <Navbar/>
              </header>
              <main className= "min-h-screen flex justify-center items-center bg-[#FFE0EE]" >
                <section className="flex flex-col justify-center items-center bg-white w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[535px] rounded-2xl shadow-lg my-8 mx-2">
                    <p className="font-bold text-[#0F172A] text-base">Necessário login!</p>
                </section>
              </main>              
            
            
            </>
        )
        
    }
        

    const user = session.user;
    console.log("session", session);
    console.log("userRole", userRole);
    if (userRole === "ADMIN"){

        return(  
            <>
                <header>
                    <Navbar/>
                </header>
                <main className= "min-h-screen flex justify-center bg-[#FFE0EE]">
                    <section className="flex flex-col items-center bg-white w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[535px] rounded-2xl shadow-lg my-8 mx-2">
                        
                        <div className="pt-15 items-center flex flex-col">

                            <h1 className= "font-bold text-[#0F172A] pb-7.5 text-xl sm:text-2xl md:text-3xl lg:text-[30px] ">
                                Minha Conta
                            </h1>
                            <img
                                src={user.image ?? "/imagens/usuario.png"}
                                alt="Foto de perfil"
                                className=" rounded-full object-cover sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                            />
                            <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#374151] pt-7 pb-5">
                                {user.name}
                            </h1>
                            <div className=" bg-[#EFF0F5] rounded-2xl flex flex-row justify-center items-center h-[60px] w-[220px] sm:h-[70px] sm:w-[240px] md:h-[80px] md:w-[270px] lg:h-[70px] lg:w-[290px] xl:h-[70px] xl:w-[290px]" >
                                
                                <img src="/imagens/email.png" alt="" className="h-5 w-4 sm:h-6 sm:w-5 md:h-7 md:w-6 lg:h-8 lg:w-7 xl:h-8 xl:w-7" />

                                <div className="justify-center items-center">
                                    <p className="text-[#9696A6] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px]  pl-3 "> E-mail </p>
                        
                                    <p className="text-[#374151] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] pl-3 "> {user.email} </p>
                                </div>
                            </div>   
                            <Link href="/admin" className="pt-4 sm:pt-10 md:pt-10 lg:pt-10">
                                <button className="cursor-pointer flex justify-center items-center bg-gradient-to-r from-[#DDA0DD] to-[#B8E6FF] text-[#5A5C8F] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-bold min-h-[30px] sm:min-h-[32px] md:min-h-[34px] lg:min-h-[36px] xl:min-h-[40px] min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px]px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 rounded-lg hover:text-[#696a9a] active:scale-[0.97] transition-transform duration-75 ease-in-out">
                                    Painel Administrativo
                                </button>
                            </Link>                       
                        </div>

                    </section>
                </main>
            
            
            </>
        )
            
        
    }

    // se não for admin é user
    return(  
        <>
            <header>
                <Navbar/>
            </header>
            <main className= "min-h-screen flex justify-center bg-[#FFE0EE]">
                <section className="flex flex-col items-center bg-white w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[535px] rounded-2xl shadow-lg my-8 mx-2">
                        
                    <div className="pt-15 items-center flex flex-col">

                        <h1 className= "font-bold text-[#0F172A] pb-7.5 text-xl sm:text-2xl md:text-3xl lg:text-[30px] ">
                            Minha Conta
                        </h1>
                        <img
                            src={user.image ?? "/imagens/usuario.png"}
                            alt="Foto de perfil"
                            className=" rounded-full object-cover sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                        />
                        <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#374151] pt-7 pb-5">
                            {user.name}
                        </h1>
                        <div className=" bg-[#EFF0F5] rounded-2xl flex flex-row justify-center items-center h-[60px] w-[220px] sm:h-[70px] sm:w-[240px] md:h-[80px] md:w-[270px] lg:h-[70px] lg:w-[290px] xl:h-[70px] xl:w-[290px]" >
                                
                            <img src="/imagens/email.png" alt="" className="h-5 w-4 sm:h-6 sm:w-5 md:h-7 md:w-6 lg:h-8 lg:w-7 xl:h-8 xl:w-7" />

                            <div className="justify-center items-center">
                                <p className="text-[#9696A6] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px]  pl-3 "> E-mail </p>
                        
                                <p className="text-[#374151] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] pl-3 "> {user.email} </p>
                            </div>
                        </div>   
                                         
                    </div>

                </section>
            </main>
            
            
        </>
    )
            
        
}