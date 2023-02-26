import styles from './Header.module.css'
import logoOMDog from '../assets/logo.svg';
import { useState } from 'react';
import Modal from 'react-modal';
import { Login } from './Login';

export function Header(){
    const [modalIsOpen,setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    return (
    <header className={styles.header}>
        <img src={logoOMDog} alt="" srcSet="Logo do site" />
        <div className={styles.listRouts}>
            <ul>
                <li>
                <button
                    onClick={openModal}
                    type="submit">
                Login
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='Login Modal'
                    overlayClassName='modalLoginOverlay'
                    className='modalLogin'
                    >
                    <Login/>
                </Modal>
                </li>
                <div className={styles.signin}>
                    <li>
                    <button
                        // onClick={}
                        type="submit">
                            Sign in
                    </button>
                    </li>
                </div>
            </ul>
        </div>
    </header>
    )
}
