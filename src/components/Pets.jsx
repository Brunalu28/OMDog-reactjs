import styles from './Pets.module.css';

export function Pets({src, name, race}){
    return(
        <div className={styles.pet}>
            <img className={styles.cover} src={src}/>
            <div className={styles.profile}>
                <strong>{name}</strong>
                <span>{race}</span>
            </div>

            <footer className={styles.dogAdot}>
                <a href="#">
                    Quero adotar
                </a>
            </footer>
        </div>
    )
}