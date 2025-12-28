import styles from './image.module.css'
import img from './assets/undraw_all-the-data_ijgn.svg'
import { apipost } from '../../services'
import { useState } from 'react'
export function Imagem() {
    const [produto, setproduto] = useState('')
    const [categoria, setcategoria] = useState('')
    const [preco, setpreco] = useState('')
    const [fornecedor, setfornecedor] = useState('')
    const [link, setlink] = useState('')
    const [linkimg1, setlinkimg1] = useState('')
    const [linkimg2, setlinkimg2] = useState('')
    const [toast, settoast] = useState([])
    const [carregando, setcarregando] = useState(false)

    function notificacao(msg) {
        setcarregando(true)
        
        const id = Date.now()
        settoast((prev) => [...prev, { id, msg }])
        setTimeout(() => {
            settoast((prev) => prev.filter((t) => t.id !== id));
            setcarregando(false)
        }, 4000)

    }
    async function enviardados(event){
        event.preventDefault()
        if (produto.length == 0 || categoria.length == 0 || preco.length == 0 || fornecedor.length == 0, link.length == 0, linkimg1.length == 0, linkimg2.length == 0) {
            alert('Campo não preenchido!')
        } else {
            try {
                await apipost(
                    produto,
                    categoria,
                    preco,
                    fornecedor,
                    link,
                    linkimg1,
                    linkimg2,
                )
            } catch (error) {
                notificacao(error)
            }
            let msg1 = 'Dados enviados para o banco'
            notificacao(msg1)
        }
    }
    return (
        <main className={styles.mainpripacl}>
            <div className={styles.container}>
                <div className={styles.itemimagem}>
                    <img src={img}></img>
                </div>
                <div className={styles.forms}>
                    <form onSubmit={enviardados}>
                        <div className={styles.formheader}>
                            <div className={styles.title}>
                                <h1>Cadastro Produtos</h1>
                            </div>
                        </div>
                        <div className={styles.inputgroup}>
                            <div className={styles.inputbox}>
                                <label for='produto'>Produto</label>
                                <input onChange={(e) => setproduto(e.target.value)} id='produto' type='text' name='produto' placeholder='Notebook Samsung...' required></input>
                            </div>
                            <div className={styles.genderinputs}>
                                <div className={styles.gendertitle}>
                                    <h6>Categoria</h6>
                                </div>
                                <div className={styles.gendergroup} required>
                                    <div className={styles.genderinput}>
                                        <input onChange={(e) => setcategoria(e.target.id)} type='radio' id='notebook' name='categoria'></input>
                                        <label for='notebook'>Notebook</label>
                                    </div>
                                    <div className={styles.genderinput}>
                                        <input onChange={(e) => setcategoria(e.target.id)} type='radio' id='celular' name='categoria'></input>
                                        <label for='celular'>Celular</label>
                                    </div>
                                    <div className={styles.genderinput}>
                                        <input onChange={(e) => setcategoria(e.target.id)} type='radio' id='console' name='categoria'></input>
                                        <label for='console'>Console</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.genderinputs} required>
                                <div className={styles.gendertitle}>
                                    <h6>Fornecedor</h6>
                                </div>
                                <div className={styles.gendergroup}>
                                    <div className={styles.genderinput}>
                                        <input onChange={(e) => setfornecedor(e.target.id)} type='radio' id='mercadolivre' name='fornecedor'></input>
                                        <label for='mercadolivre'>Mercado_Livre</label>
                                    </div>
                                    <div className={styles.genderinput}>
                                        <input onChange={(e) => setfornecedor(e.target.id)} type='radio' id='kabum' name='fornecedor'></input>
                                        <label for='kabum'>Kabum</label>
                                    </div>
                                    <div className={styles.genderinput}>
                                        <input onChange={(e) => setfornecedor(e.target.id)} type='radio' id='magazinelui' name='fornecedor'></input>
                                        <label for='magazinelui'>Magazine_luiza</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inputbox}>
                                <label for='preco'>Preco</label>
                                <input onChange={(e) => setpreco(e.target.value)} id='preco' type='text' name='preco' placeholder='R$ 1.500,00' required></input>
                            </div>
                            <div className={styles.inputbox}>
                                <label for='link'>Link do produto</label>
                                <input onChange={(e) => setlink(e.target.value)} id='link' type='text' name='link' placeholder='https://mercadolivre.com.br/notebook' required></input>
                            </div>
                            <div className={styles.inputbox}>
                                <label for='linkimg1'>Link  1° img produto</label>
                                <input onChange={(e) => setlinkimg1(e.target.value)} id='linkimg1' type='text' name='linkimg1' placeholder='https://linkdeimagem.img' required></input>
                            </div>
                            <div className={styles.inputbox}>
                                <label for='linkimg2'>Link  2° img produto</label>
                                <input onChange={(e) => setlinkimg2(e.target.value)} id='linkimg2' type='text' name='linkimg2' placeholder='https://linkdeimagem.img2' required></input>
                            </div>
                        </div>
                        <div className={styles.continuebutton}>
                            <button type='submit' disabled={carregando}><a href='#'>Cadastrar</a></button>
                        </div>
                    </form>
                    <div className={styles.toastbox}>
                        {toast.map((item) => (
                            <div className={styles.toast}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>{toast[0].msg}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </main>

        // <main>
        //     <h2>Cadastro de Produtos</h2>
        //     <form className={styles.formcontent}>
        //         <input
        //             placeholder="Produto"
        //             onChange={(e) => setproduto(e.target.value)}></input>
        //         <label>Categoria</label>
        //         <select id='categorias'>
        //             <option>Celular</option>
        //             <option>Console</option>
        //             <option>Notebook</option>
        //         </select>
        //         <input
        //             placeholder="Fornecedor"
        //             onChange={(e) => setfornecedor(e.target.value)}></input>
        //         <input
        //             placeholder="Preco"
        //             onChange={(e) => setpreco(e.target.value)}></input>
        //         <input
        //             placeholder="Link do produto"
        //             onChange={(e) => setlink(e.target.value)}></input>
        //         <input
        //             placeholder="Link img1"
        //             onChange={(e) => setlinkimg1(e.target.value)}></input>
        //         <input
        //             placeholder="Link img2"
        //             onChange={(e) => setlinkimg2(e.target.value)}></input>
        //     </form>
        //     <button className={styles.btncadastro} onClick={enviardados}>Cadastrar</button>

        // </main>
    )
}