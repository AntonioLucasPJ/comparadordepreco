import { useNavigate } from "react-router-dom"
export function Windowsdash() {
    const nagivate = useNavigate()
    const returnh = () => {
        console.log("Retornar para Home")
        return nagivate("/")
    }
    return (
        <main>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                <h2 style={{ color: "#fff", textAlign: "center" }}>Tela de Dashboard</h2>
                <button onClick={returnh}>Return Home</button>
            </div>
        </main>
    )
}