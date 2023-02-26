import styles from './Login.module.css';
import logoOMDog from '../assets/logo.svg';

export function Login(){
    return (
        <section className={styles.FormLogin}>
            <img src={logoOMDog} />
            <form action="">
                <p>Faça seu Login</p>
                <div className={styles.Form}>
                    <div className={styles.inputText}>
                        <label>Usuário</label>
                        <input type="username"placeholder="Usuário"/>
                    </div>
                    <div className={styles.inputText}>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha"/>
                    </div>
                </div>
            </form>
        </section>
    )
}