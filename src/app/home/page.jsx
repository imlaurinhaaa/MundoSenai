import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello World!</h1>
                <Link href="/code" prefetch>
                    <button className={styles.button}>Avançar</button>
                </Link>
        </div>
    );
}
