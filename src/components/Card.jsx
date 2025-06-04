import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ image, name, age, favorite, hobbies }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.cardFront}>
                    <Image className={styles.image} src={image} alt="Profile Picture" width={100} height={100} />
                    <h2 className={styles.title}>{name}</h2>
                </div>
                <div className={styles.cardBack}>
                    <h3 className={styles.title}>Conheça nosso(a) Dev!</h3>
                    <Image className={styles.image} src={image} alt="Profile Picture" width={100} height={100} />
                    <p className={styles.description}>Idade: {age} anos</p>
                    <p className={styles.description}>Matéria favorita de DS: {favorite}</p>
                    <p className={styles.description}>Hobbies: {hobbies}</p>
                </div>
            </div>
        </div>
    );
}