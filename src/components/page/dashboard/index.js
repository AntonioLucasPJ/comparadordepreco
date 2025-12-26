import { useFetcher, useNavigate } from "react-router-dom"
import { Mychat } from "./grafics";
import { useState, useEffect, useRef } from "react";
import styles from './dashboard.module.css'
import { api } from '../../services/index.js'
export function Windowsdash() {
    const nagivate = useNavigate()
    const [produtos, setprodutos] = useState([])
    const [error, seterror] = useState()
    const [carregando, setcarregando] = useState(true)
    const [valor, setvalor] = useState("")
    const isFirstRun = useRef(true)
    useEffect(() => {
        async function chamadaapi() {      
            try {
                const dados = await api()
                setprodutos(dados)
                
            } catch (error) {
                seterror(error)
            } 
        }
        chamadaapi();
    },[])

    const returnh = () => {
        console.log("Retornar para Home")
        return nagivate("/")
    }
    return (
        <main>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                <h2>Tela de Dashboard</h2>
            </div>
            <div className={styles.content}>
                <Mychat
                labels={produtos.map(item=> item.produto)}
                valorA={produtos.map(item => item.preco)}
                valorB={['1500','1000','1800','500','450','2500']}></Mychat>
            </div>
            <button className={styles.btnreturn} onClick={returnh}>Return Home</button>

        </main>
    )
}