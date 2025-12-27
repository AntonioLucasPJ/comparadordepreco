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
    async function enviardados() {
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
            console.log(error)
        } finally {
            console.log("Função cadastrar")
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.formimage}>
                <img src={img}></img>
            </div>
            <div className={styles.forms}>
                <form action='#'>
                    <div className={styles.formheader}>
                        <div className={styles.title}>
                            <h1>Cadastre-se</h1>
                        </div>
                    </div>
                    <div className={styles.inputgroup}>
                        <div className={styles.inputbox}>
                            <label for='firstname'>Nome</label>
                            <input id='firstname' type='text' name='firstname' placeholder='Digite o primeiro nome' required></input>
                        </div>
                        <div className={styles.inputbox}>
                            <label for='lastname'>Ultimo nome</label>
                            <input id='lastname' type='text' name='lastname' placeholder='Digite o seu sobre nome' required></input>
                        </div>
                        <div className={styles.inputbox}>
                            <label for='email'>Email</label>
                            <input id='email' type='text' name='email' placeholder='Digite o seu email' required></input>
                        </div>
                        <div className={styles.inputbox}>
                            <label for='number'>number</label>
                            <input id='number' type='text' name='number' placeholder='(xx) xxxx -xxxx' required></input>
                        </div>
                        <div className={styles.inputbox}>
                            <label for='password'>Senha</label>
                            <input id='password' type='text' name='password' placeholder='Digite o primeiro nome' required></input>
                        </div>
                        <div className={styles.inputbox}>
                            <label for='confirmpassword'>Confirme sua senha</label>
                            <input id='confirmpassword' type='text' name='confirmpassword' placeholder='Digite o primeiro nome' required></input>
                        </div>
                    </div>
                    <div className={styles.genderinputs}>
                        <div className={styles.gendertitle}>
                            <h6>Gênero</h6>
                        </div>
                        <div className={styles.gendergroup}>
                            <div className={styles.genderinput}>
                                <input type='radio' id='famale' name='gender'></input>
                                <label for='famale'>Feminino</label>
                            </div>
                            <div className={styles.genderinput}>
                                <input type='radio' id='male' name='gender'></input>
                                <label for='male'>Masculino</label>
                            </div>
                            <div className={styles.genderinput}>
                                <input type='radio' id='outhers' name='gender'></input>
                                <label for='outhers'>Outros</label>
                            </div>
                            {/* <div className={styles.genderinput}>
                                <input type='radio' id='none' name='gender'></input>
                                <label for='none'>Prefironão dizer</label>
                            </div> */}
                        </div>
                    </div>
                    <div className={styles.continuebutton}>
                        <button><a href='#'>Continuar</a></button>
                    </div>
                </form>
            </div>
        </div>

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