import React from 'react';
import styles from './styles.module.css';

export default function Recover(){
    return(
        <main>
      <div className={styles.logincontainer}>
        <form className={styles.loginform}>
        <h1>Esqueci minha Senha</h1>
          <label className={styles.label}>
            Senha:
            <input type="text" className={styles.input} />
          </label>
          <br />
          <label className={styles.label}>
            Confirme a senha:
            <input type="password" className={styles.input} />
          </label>
          <br />
          <a href="/dashboard"><button type="button" className={styles.button}>
           confirmar
          </button></a>
        </form>
      </div>
        </main>
    )
}