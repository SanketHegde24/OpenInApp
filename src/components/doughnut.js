import { ArcElement, Chart as ChartJS, Colors, Legend, Tooltip } from 'chart.js'
import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    Legend,
    Tooltip,
    ArcElement,
    Colors
)

function Doughnutchart() {

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
          backgroundColor: [
            'rgba(152, 216, 158, 1)',
            'rgba(238, 132, 132, 1)',
            'rgba(246, 220, 125, 1)',
            'rgba(169, 176, 229, 1)'
            ],
            borderWidth: 0,
        }]
      }

      var options = {
        indexAxis: 'x',
        elements: {
            bar: {
                // borderRadius: 20,
            },
        },
        // responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        },
      }
    
    return (
        <div style={{width: '100%'}}>
            <Doughnut 
                data={data}
                options={options}
            />
        </div>
    )
}

export default Doughnutchart
