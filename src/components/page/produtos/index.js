import { useState,useEffect,useRef } from "react"
import { api } from "../../services"
import { Produtos } from "../../produtos"
import styles from './Produtos.module.css'
export function Pageprodutos() {
    const [produtos, setprodutos] = useState([])
    const [error, seterror] = useState()
    const [carregando, setcarregando] = useState(false)
    const [valor, setvalor] = useState("")

    const isFirstRun = useRef(true)
    async function chamadaapi() {
        console.log(carregando)
        //Função trim simplismente remove os spacos caso existam no codigo
        const termo = valor.trim()
        if (!termo) {
            seterror('Preencha o campo e clique em pesquisar')
            return;
        }
        seterror("")
        try {
            setcarregando(true)
            const dados = await api(termo)
            setprodutos(dados)
            console.log("Buca concluida")
        } catch (error) {
            seterror(error)
        } finally {
            setcarregando(false)
        }
    }
    return (
        <main>
            <h1>Comparador de preco</h1>
            <div className={styles.Content}>
                <input
                    onKeyDown={(e) => e.key == 'Enter' ? chamadaapi() : ''}
                    onChange={(e) => setvalor(e.target.value)} placeholder="Exemplo:Briquedos...."></input>
                <button
                    className={styles.btn_search}
                    disabled={carregando || !valor.trim()} onClick={() => chamadaapi()}>
                        {carregando && (
                        <div className={styles.loader_container}>
                            <div className={styles.loader}>
                                <span className={styles.loader_text}></span>
                            </div>
                        </div>
                    ) || <span><i className="fa-solid fa-magnifying-glass"></i> Pesquisar</span>}
                    
                </button>
            </div>
            {error && <p style={{ display: "flex", justifyContent: "center", color: '#ff0000ff' }}>{error}</p>}
            <div className={styles.Product_list} key={produtos.id}>
                {produtos.map(item => (
                    <Produtos produto={item.produto}
                        categoria={item.categoria}
                        preco={item.preco}
                        fornecedor={item.fornecedor}
                        img1={item.img1}
                        link={item.link}
                    ></Produtos>
                ))}
            </div>
        </main>
    )
}