
import axios from 'axios'
export async function api(produto) {
    let link = ''

    if(produto){
        link = `https://apiproduto.vercel.app/produtos?categoria=${produto}`
    } else {
        link = 'https://apiproduto.vercel.app/produtos'
    }
    
    const res = await axios.get(link)
    const data = await res.data
    return data
}
