import { Chart as ChartJS, Legend, plugins, Title, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, BarElement } from "chart.js"
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { type } from "@testing-library/user-event/dist/type";
import styles from '../dashboard.module.css'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)
export function Mychat({ labels, valorA, valorB}) {
    const dados = {
        labels,
        datasets: [
            {
                label: "Maior Preco",
                data: valorA,
                borderColor: 'rgb(75,192,192)',
                backgroundColor: "#cc3333ff",
            },
            {
                label: "Menor Preco",
                data: valorB,
                borderColor: 'rgb(75,192,192)',
                backgroundColor: "#569c2eff",
            }
        ]
    };
    const op = {
        responsive: true,
        scales: {
            y: {

                beginAtZero: true,
                plugins: {
                    Legend: {
                        display: false
                    },
                    Title: {
                        display: true,
                        text: "Comparador de preco",
                        font: {
                            size: 18
                        }
                    }
                }
            }
        }
    }
    return (
        <Line data={dados} options={op} />
    )
}