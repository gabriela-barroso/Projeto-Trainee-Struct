/* Componente do product card*/


import styles from '~/styles/card.module.css'; 

export function Card({tituloCard, descricaoCard, preco, imagemCard }: {tituloCard: string; descricaoCard: string; preco: string; imagemCard: string}) {
    return (
        <div className={styles.card}>
            <img src={imagemCard} alt={tituloCard} className={styles.imagem} />
            <h1>{tituloCard}</h1>
            <p>{descricaoCard}</p>
            <p>{preco}</p>
        </div>
    )
}
