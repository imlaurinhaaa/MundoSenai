import styles from "./Code.module.css";
import Header from "../../components/Header";
import React from "react";
import Card from "../../components/Card";

export default function Code() {
    return (
        <div className={styles.container}>
            <Header />
            <p className={styles.text}>Se você está começando agora, parabéns pela escolha!
                Ao navegar pelas páginas deste ambiente, você vai conhecer funções e recursos do CSS usados no dia a dia de quem desenvolve interfaces modernas e funcionais.
                Explore, interaja e observe como pequenos detalhes visuais fazem toda a diferença na experiência do usuário.
                Este é só o começo da sua jornada no mundo do desenvolvimento web!</p>

            <div className={styles.content}>
                <h3 className={styles.title}>Conheça nossos Monitores!</h3>
                <div className={styles.cards}>
                    <Card
                        image="/image/amanda.jpg"
                        name="Amanda Mechi"
                        age="17"
                        favorite="Front-end"
                        hobbies="Academia"
                    />
                    <Card
                        image="/image/flavia.jpg"
                        name="Flavia Mendes"
                        age="17"
                        favorite="Front-end"
                        hobbies="Futevôlei"
                    />
                    <Card
                        image="/image/laura.jpg"
                        name="Laura Violla"
                        age="17"
                        favorite="Back-end e Banco de Dados" 
                        hobbies="Ler, ouvir música e assitir séries"
                    />
                    <Card
                        image="/image/luiza.jpg"
                        name="Luiza Schettini"
                        age="17"
                        favorite="Front-end"
                        hobbies="Academia"
                    />
                    <Card
                        image="/image/pablo.jpg"
                        name="Pablo Delgado"
                        age="17"
                        favorite="Back-end"
                        hobbies="Criar sistemas"
                    />
                    <Card
                        image="/image/arthur.jpg"
                        name="Pedro Santos"
                        age="17"
                        favorite="Front-end"
                        hobbies="Jogar videogame"
                    />
                    <Card
                        image="/image/sophiaB.jpg"
                        name="Sophia Balico"
                        age="18"
                        favorite="Front-end"
                        hobbies="Tocar guitarra"
                    />
                    <Card
                        image="/image/sophiaG.jpg"
                        name="Sophia Gomes"
                        age="17"
                        favorite="Front-end"
                        hobbies="Academia"
                    />
                </div>
            </div>
        </div>
    );
}
