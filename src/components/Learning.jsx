import { HouseLine } from 'phosphor-react';
import { useState } from 'react';
import { Header } from './Header';
import styles from './Learning.module.css';
import { Ong } from './Ong';
import { Pets } from './Pets';
import Modal from "react-modal";

export function Learning() {

    const [modalIsOpen,setModalIsOpen] = useState(false)

    return(
        <div>
            <Header />

            <section className={styles.sectionInitial}>
                <div className={styles.informations}>
                    <h1>Que tal adotar um pet?</h1>
                    <p>
                        São mais de 30 milhões de animais esperando um lar cheio de afeto, respeito e amor. 
                        Existem diversas formas de contribuir com a causa e potencializar a nossa força na luta contra o abandono.
                    </p>
                    <button type="submit">Adote</button>
                </div>
                <div className={styles.imgDog}>
                    <img src="./src/assets/dogLearningPage.png" alt="" />
                </div>
            </section>
            <section className={styles.sectionOngs}>
            <h1>Veja as ongs próximas a sua cidade!</h1>
            <div className={styles.listOngs}>
                <div className={styles.ongs}>
                    <HouseLine size={32} />
                    <h1>Ong Bendita adoção</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex neque qui obcaecati voluptates fugiat quisquam, dolor, corrupti odit architecto quidem nisi, suscipit autem eius! Pariatur veniam omnis dolorum error.</p>
                </div>
                <div className={styles.ongs}>
                    <HouseLine size={32} />
                    <h1>Ong Patinhas unidas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex neque qui obcaecati voluptates fugiat quisquam, dolor, corrupti odit architecto quidem nisi, suscipit autem eius! Pariatur veniam omnis dolorum error.</p>
                </div>
                <div className={styles.ongs}>
                    <HouseLine size={32} />
                    <h1>Ong A4</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex neque qui obcaecati voluptates fugiat quisquam, dolor, corrupti odit architecto quidem nisi, suscipit autem eius! Pariatur veniam omnis dolorum error.</p>
                </div>
                <div className={styles.ongs}>
                    <HouseLine size={32} />
                    <h1>Ong Ame um Pet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex neque qui obcaecati voluptates fugiat quisquam, dolor, corrupti odit architecto quidem nisi, suscipit autem eius! Pariatur veniam omnis dolorum error.</p>
                </div>
            </div>
            <div className={styles.searchOngs}>
                <textarea
                    name='search'
                    placeholder='Encontre uma Ong próxima a você'
                />
                <button type="submit">Pesquisar</button>
            </div>
            </section>
            <section className={styles.pets}>
                <Pets
                    name='Pipoca'
                    race='Golden retriever'
                    src='https://images.unsplash.com/photo-1605405809413-635a61f3d40a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
                <Pets
                    name='Fred'
                    race='Pitbull'
                    src='https://images.unsplash.com/photo-1600369671738-fa3a43efeced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/>
                <Pets
                    name='Lulu'
                    race='Rottweiler'
                    src='https://images.unsplash.com/photo-1598819849325-f0152d605b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
            </section>
        </div>
    )
}