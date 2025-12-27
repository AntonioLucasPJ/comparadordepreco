
import axios from 'axios'
export async function api(produto) {
    let link = ''
    if (produto) {
        link = `https://apiproduto.vercel.app/produtos?categoria=${produto}`
    } else {
        link = 'https://apiproduto.vercel.app/produtos'
    }

    const res = await axios.get(link)
    const data = await res.data
    return data
}
export async function apipost(produto, categoria, preco, fornecedor, link, img1, img2) {
    console.log(produto.length)
    if(produto.length ==0 || categoria.length ==0 || preco.length ==0 || fornecedor.length ==0, link.length ==0, img1.length ==0, img2.length ==0){
        alert('Campo não preenchido!')
    }
    const axiosConfig = { headders: { 'Content-Type': 'application/json' } }
    await axios.post('https://apiproduto.vercel.app/produtos', {
        produto: produto,
        categoria: categoria,
        preco: preco,
        fornecedor: fornecedor,
        link: link,
        img1: img1,
        img2: img2
    },
        axiosConfig)
        .then(function (response) {
            console.log(`Dados enviados para API Status:${response.status}`)
            alert("Produto Cadastro com sucesso!!")
        })
        .catch(function (error) {
            console.log(error)
        });
}