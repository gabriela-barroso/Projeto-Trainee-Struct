"use client"
import {signIn, signOut, useSession} from "next-auth/react";
import { useState, useEffect } from 'react'


export default function Home() {
  const session = useSession();
  return (
    <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <p>{session.data?.user.name}</p>
        <button onClick={() => signIn("google")}>LogIn</button>
        <button onClick={() => signOut()}>LogOut</button>
      </div>
  </main>
  );
}