import React from 'react'
import { Bar } from "react-chartjs-2"

function RenovationSummary() {

    const data = {
        labels: [""],
        datasets: [
            {
                label: "Begining Balance",
                barThickness: 40,
                barPercentage: 0.7,
                data: [4],
                borderColor: "#4B176",
                backgroundColor: "#4B176", // Purple
            },  
            {
                label: "Ending Balance",
                barPercentage: 0.7,
                barThickness: 40,
                backgroundColor: "#176A1F",  //Green
                data: [5]
            },

        ]
    }

    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                    color: "#4B176A",
                    lineWidth: 5,
                    drawTicks: false,    
                },
                ticks: {
                    display: true,
                    fontSize: 18,
                    fontColor: "#4B176A",
                    padding: 20
                },
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                    color: "#4B176A",
                    lineWidth: 5,
                    drawTicks: false,
                },
                ticks: {
                    display: false,
                    suggestedMin : 0
                },

                

            }]
        },
        legend: {
            display: true,
            labels: {
                // This more specific font property overrides the global property
                display: "grid",
                fontColor: '#4B176A',
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: 16,
                padding: 10,
                boxWidth: 20,
                boxHeight: 3
            },
            align: "start",
            position: "right",
        },
        // title: {
        //     display: true,
        //     text: " A Simple Graph",
        //     fontColor: "#4B176A"
        // }
    }
    return <Bar data={data} options={options}/>
}

export default RenovationSummary;

