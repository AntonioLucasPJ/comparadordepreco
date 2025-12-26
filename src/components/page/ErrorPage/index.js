import { useNavigate } from "react-router-dom"

export function ErrorPage(){
    const navigate = useNavigate()
    const returnhome = ()=>{
        console.log("Retornando para Home")
        return navigate('/')
    }
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center",background:"#fff",width:"200px",height:"200px",borderRadius:"20px"}}>
            <h1>404</h1>
            <p>Erro de Page</p>
            <button onClick={(e)=> returnhome()}>Return Home</button>
        </div>
    )
}