import React from 'react'
import { Line } from "react-chartjs-2"

function ReportLineChart() {

    const data = {
        labels: ["0","0.2","0.4","0.6","0.8","1","1.2","1.4","1.6","1.8","2"],
        datasets: [
            {
                pointStyle: 'rect',
                radius: 4,
                borderWidth: 1,
                // label: "Sales for 2020 (M)",
                data: [0,2,3,4,4.5,5.5,6.75,7.89,8.5,9,9.2,9.6,9.9, 10, 9.8,9.6,9.4],
                // color: "#4B176A",
                borderColor: "green",
                borderColor: ['red'],
                backgroundColor: "transparent",
                pointBackgroundColor: ['#4B176A','#4B176A','#4B176A','#4B176A',
                '#4B176A','#4B176A','#4B176A','#4B176A','#4B176A','#4B176A','#4B176A'],
                pointBorderColor: ['#4B176A']
            }
        ]
    }

    const options = {

        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                fontColor: '#4B176A',
                fontFamily: "Roboto",
                fontSize: 19
            }
        },
        title: {
            display: true,
            text: " A Simple Graph",
            fontColor: "#4B176A",
            fontSize: 25
        },
        scales: {
            xAxes: [
                {
                gridLines: {
                    // display: false ,
                    color: "#e7cafa"
                    },
                scaleLabel: {
                    display: true,
                    labelString: 'X Axis',
                    fontColor: "#4B176A",
                    fontFamily: "Roboto",
                    fontSize: "10",
                    fontStyle: "Bold",
                    padding: 10
                    },
                  ticks: {
                      fontColor: "#4B176A",
                      min: 0,
                      max: 2,
                      stepSize: 0.2
                  }  
                },
            ],

            yAxes: [
                {
                gridLines: {
                    // display: false ,
                    color: "#e7cafa",
                    },
                scaleLabel: {
                    display: true,
                    labelString: ' Y title',
                    fontColor: "#4B176A",
                    fontFamily: "Roboto",
                    fontSize: "10",
                    fontStyle: "Bold",
                    padding: "10"
                  },
                  ticks: {
                      fontColor: "#4B176A",
                      min: 0,
                      max: 10,
                      stepSize: 1
                  }  
                },
            ]
        }
    }
    return <Line data={data} options={options}/>
}

export default ReportLineChart
