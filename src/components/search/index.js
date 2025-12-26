import './seach.module.css'
import { api } from '../services'
import { useState,useEffect,useRef } from 'react'
export function Search() {
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
            seterror('Preencher campo de buscar')
            return;
        }
        try {
            setcarregando(true)
            const dados = await api(termo)
            setprodutos(dados)
            console.log("Buscar concluida")
        } catch (error) {
            seterror(error)
        } finally {
            setcarregando(false)
        }
    }
    return (
        <>
        </>
    )
}