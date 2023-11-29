import React from 'react';
import styles from './styles.module.css';

export default function Login() {
  return (
    <main >
      <div className={styles.logincontainer}>
        <form className={styles.loginform}>
        <h1>Login</h1>
          <label className={styles.label}>
            Usuário:
            <input type="text" className={styles.input} />
          </label>
          <br />
          <label className={styles.label}>
            Senha:
            <input type="password" className={styles.input} />
          </label>
          <br />
          <a href="/recover" className={styles.teste}>Esqueceu a senha?</a>
          <a href="/dashboard"><button type="button" className={styles.button}>
            Login
          </button></a>
          <a href="/registro"><button type="button" className={styles.button}>
            cadastre-se
          </button></a>
        </form>
      </div>
    </main>
  );
}
