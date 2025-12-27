
import styles from './usuarios.module.css'
import { useNavigate } from "react-router-dom"
import foto from './img/picture1.jpg'
import img1 from './img/user.jpg'
export function Usuarios() {
    const navigate = useNavigate()
    const returnhome = () => {
        navigate("/")
    }
    return (
        <main>
            <h2>Tela de Usuarios</h2>
            <div className={styles.container}>
                <img src={img1} className={styles.imgproduto}></img>
            </div>
            <div className={styles.content}>
                <div>
                    <button className={styles.btn_set}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                </div>
                <div className={styles.card}>
                    <h2>Usuario</h2>
                    <div className={styles.cardinfor}>
                        <img src={foto} className={styles.foto}></img>
                        <div>
                            <p>Nome:Hacker</p>
                            <p>Idade:20</p>
                            <p>Profissão:Red Hat</p>
                            <p>Email:<a href='#'>redhat@outlook.com</a></p>
                        </div>
                    </div>
                    <button className={styles.btn_send}>Enviar</button>
                </div>
                <div>
                    <button className={styles.btn_set}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </main>
    )
}