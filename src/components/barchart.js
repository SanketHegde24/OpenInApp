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

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=4"
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
            data: chart?.coins?.map(x => x.listedAt),
            backgroundColor: 'rgba(152, 216, 158, 1)',
        },
        {
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x => x.listedAt) ,
            backgroundColor: 'rgba(238, 132, 132, 1)',
        },
        
    ]}

    var options = {
        scales: {
            x: {
              display: false, // Hide the x-axis grid lines and ticks
            },
          },
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 0,
                borderRadius: 10,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
      }
    
    return (
        <div style={{ height: '300px', width: '100%'}}>
            <Bar 
                data={data}
                options={options}
            />
        </div>
    )
}

export default Barchart