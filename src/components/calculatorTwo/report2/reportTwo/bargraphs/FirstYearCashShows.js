import React from 'react'
import { Bar } from "react-chartjs-2"

function FirstYearCashShows() {

    const data = {
        labels: ["Month 1","Month 2","Month 3","Month 4"],
        datasets: [
            {
                label: "Cash Flow Before Debt Service",
                // barThickness: 55,
                barPercentage: 0.7,
                borderWidth: 1,
                data: [4,5,4,4],
                backgroundColor: "#4B176", // Purple
            },  
            {
                label: "Cash Flow After Financing",
                // barThickness: 55,
                barPercentage: 0.7,
                borderWidth: 1,
                backgroundColor: "#176A1F",  //Green
                data: [5,6,4,4]
            }
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
                    padding: 20,
                    suggestedMin: 0
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
                    suggestedMin: 0
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

export default FirstYearCashShows;

