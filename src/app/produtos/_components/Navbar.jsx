import React from 'react';
import styles from '~/styles/Navbar.module.css';



function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Papelaria dos Cria
      </div>
      <ul className={styles.navLinks}>
        <li><a href="linkInicio">Início</a></li>
        <li><a href="linkProdutos">Produtos</a></li>
        <li><a href="linkCarrinho">Carrinho</a></li>
        <li><a href="linkLogin" className={styles.loginButton}>Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;



