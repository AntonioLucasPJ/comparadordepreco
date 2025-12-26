
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
export async function apipost(produto,categoria,preco,fornecedor,link,img1,img2){
    const axiosConfig = {headders:{'Content-Type':'application/json'}}
    await axios.post('https://apiproduto.vercel.app/produtos',{
        produto:produto,
        categoria:categoria,
        preco:preco,
        fornecedor:fornecedor,
        link:link,
        img1:img1,
        img2:img2
    },
    axiosConfig)
    .then(function(response){
        console.log(response.status)
    })
    .catch(function (error){
        console.log(error)
    });
}