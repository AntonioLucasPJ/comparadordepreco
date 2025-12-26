import styles from './image.module.css'
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
        }catch(error){
            console.log(error)
        }finally{
            console.log("Função cadastrar")
        }
    }
    return (
        <main>
            <h2>Cadastro de Produtos</h2>
            <form className={styles.formcontent}>
                <input
                    placeholder="Produto"
                    onChange={(e) => setproduto(e.target.value)}></input>
                <input
                    placeholder="Categoria"
                    onChange={(e) => setcategoria(e.target.value)}></input>
                <input
                    placeholder="Fornecedor"
                    onChange={(e) => setfornecedor(e.target.value)}></input>
                <input
                    placeholder="Preco"
                    onChange={(e) => setpreco(e.target.value)}></input>
                <input
                    placeholder="Link do produto"
                    onChange={(e) => setlink(e.target.value)}></input>
                <input
                    placeholder="Link img1"
                    onChange={(e) => setlinkimg1(e.target.value)}></input>
                <input
                    placeholder="Link img2"
                    onChange={(e) => setlinkimg2(e.target.value)}></input>
            </form>
            <button className={styles.btncadastro} onClick={enviardados}>Cadastrar</button>

        </main>
    )
}