import { BarElement, CategoryScale, Chart as ChartJS, Colors, LinearScale } from 'chart.js'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Colors
)

function Barchart() {

    const [chart, setChart] = useState([])

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10"
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var apiKey = "coinrankingd23cac42f61870a60131d4984ca2d19323e1f3b3a5b3887f"

    useEffect(() => {
        const fetchCoins = async() => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((resp) => {
                resp.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(err => {
                console.log(err)
            })
        }
        fetchCoins()
    }, [baseUrl])

    var data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
          label: `${chart?.coins?.length} Coins Available`,
          data: chart?.coins?.map(x => x.price),
          backgroundColor: [
            'rgba(255, 99, 132)',   // Background color for the first bar
            'rgba(54, 162, 235)',   // Background color for the second bar
            'rgba(255, 206, 86)',   // Background color for the third bar
            'rgba(75, 192, 192)',   // Background color for the fourth bar
            'rgba(153, 102, 255)'   // Background color for the fifth bar
            ],
          borderWidth: 1
        }]
      }

    var options = {
        maintainAspectRatio : false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        },
        plugins: {
            colors: {
                enabled: true
            }
        }
      }
    
    return (
        <div>
            <Bar 
                data={data}
                options={options}
            />
        </div>
    )
}

export default Barchart