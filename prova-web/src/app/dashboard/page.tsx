import React from 'react';
import styles from './styles.module.css';

export default function DashBoard(){
    return(
        <div className={styles.dashboardcontainer}>
        <header className={styles.dashboardheader}>
          <h1 className={styles.h1}>Dashboard</h1>
        </header>
  
        <main className={styles.dashboardcontent}>
          <h2 className={styles.h1}>Bem-vindo ao Dashboard</h2>
          <p className={styles.p}>Este é um exemplo de conteúdo no Dashboard.</p>
        </main>
  
        <footer className={styles.dashboardfooter}>
          <a className={styles.a} href="/"> Sair</a>
        </footer>
        </div>
    )
}