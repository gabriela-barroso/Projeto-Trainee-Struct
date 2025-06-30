/* Esse arquivo serve para rodar o servidor da página de produtos apenas, não é o page.tsx da main */
import React from 'react';
import Navbar from '~/app/produtos/_components/Navbar';
import { Card } from '~/app/produtos/_components/card';
import styles from '~/styles/card.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Nossos produtos</h1>

      <div className={styles.containerCards}>
        <a href="linkCanetaAzul"><Card tituloCard="Caneta azul" descricaoCard="Descrição" preco="R$ 5" imagemCard="/caneta-azul.png" /></a>
        <a href="linkCaderno"><Card tituloCard="Caderno" descricaoCard="Descrição" preco="R$ 10" imagemCard="/caderno.jpg" /></a>        
        <a href="linkBorracha"><Card tituloCard="Borracha" descricaoCard="Descrição" preco="R$ 2" imagemCard="/borracha.webp" /></a>
      </div>

      <div className={styles.verMaisContainer}>
        <button className={styles.botaoVerMais}><a href="linkVermais">Ver mais</a></button>
      </div>
    </div>
  );
}

