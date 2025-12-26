import styles from './index.module.css'

export function Produtos({ produto, categoria, preco, fornecedor, img1, img2,link }) {
    return (
        <div className={styles.Container}>
            <a
            className={styles.link}
            href={link}>
                <img className={styles.imgitem}
                    src={img1}></img>
                <h2>{produto}</h2>
                <p>{fornecedor}</p>
                <p className={styles.preco}>{parseFloat(preco).toLocaleString('pt-BR', {
                    style: "currency",
                    currency: 'BRL'
                })}</p>
            </a>
        </div>
    )
}