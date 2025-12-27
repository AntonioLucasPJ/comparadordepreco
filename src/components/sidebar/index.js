import { useState } from 'react'
import imguser from './img/user2.jpg'
import styles from './navsider.module.css'
import { useNavigate,Link } from 'react-router-dom'
export function Nav() {
    const[opennav,setopenva] = useState(false)
    const[page,setpage] = useState(0)
    const navigate = useNavigate()
    function navegar(valor){
        if(valor==1) {
            navigate("/windowsdash")
        }if(valor==2){
            navigate('/usuarios')
        }if(valor==3){
            navigate('/notificacao')
            setpage(0)
        }if(valor==4){
            navigate('/produtos')
        }
    }
    return (
        <div>
            <nav className={opennav?[`${styles.sidebar} ${styles.opensidebar}`]: styles.sidebar}>
                <div className={styles.sidebarcontent}>
                    <div className={styles.user}>
                        <img src={imguser} alt="usuario" className={styles.sizeimg}></img>
                        <p className={styles.userinfor}>
                            <span className={styles.item_description}>
                                Fulano de tal
                            </span>
                            <span className={styles.item_description}>
                                Lorem ipsuns
                            </span>
                        </p>
                    </div>
                    <ul className={styles.sideitems}>
                        <li className={[`${styles.sideitem} ${styles.active}`]}>
                            <Link to='/windowsdash'>
                                <i className='fa-solid fa-chart-area'></i>
                                <span className={styles.item_description}>
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li className={styles.sideitem}>
                            <Link to='/usuarios'>
                                <i className="fa-solid fa-user"></i>
                                <span className={styles.item_description}>
                                    Usuarios
                                </span>
                            </Link>
                        </li>
                        <li className={styles.sideitem}>
                            <Link to='/notificacoes'>
                                <i className="fa-solid fa-bell"></i>
                                <span className={styles.item_description}>
                                    Notificações
                                </span>
                            </Link>
                        </li>
                        <li className={styles.sideitem}>
                            <Link to='/produtos'>
                                <i className="fa-solid fa-box"></i>
                                <span className={styles.item_description}>
                                    Produtos
                                </span>
                            </Link>
                        </li>
                        <li className={styles.sideitem}>
                            <Link to='/imagens'>
                                <i className="fa-regular fa-image"></i>
                                <span className={styles.item_description}>
                                    Imagens
                                </span>
                            </Link>
                        </li>
                        <li className={styles.sideitem}>
                            <Link to='/configuracoes' >
                                <i className="fa-solid fa-gear"></i>
                                <span className={styles.item_description}>
                                    Configurações
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <button className={styles.open_btn}
                    onClick={(e) => setopenva(!opennav)}>
                        <i className='fa-solid fa-chevron-right'></i>
                    </button>
                </div>
                <div className={styles.logout}>
                    <button className={styles.btn_logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span className={styles.item_description}>
                            Logout
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}