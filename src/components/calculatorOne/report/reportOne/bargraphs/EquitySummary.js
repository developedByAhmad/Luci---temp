import React from 'react'
import { Bar } from "react-chartjs-2"

function EquitySummary() {

    const data = {
        labels: ["Year 1","Year 2","Year 3","Year 4"],
        datasets: [
            {
                label: "Property Value",
                radius: 3,
                barPercentage: 0.8,
                categoryPercentage: 0.8,
                data: [3,7,4,5],
                borderColor: "#4B176",
                borderColor: ['red'],
                backgroundColor: "#4B176", // Purple
            },  
            {
                label: "Debt Principle",
                barPercentage: 0.8,
                categoryPercentage: 0.8,
                backgroundColor: "#176A1F",  //Green
                data: [4,2,6,5]
            },
            {
                label: "Equity",
                barPercentage: 0.3,
                categoryPercentage: 0.5,
                backgroundColor: "#6A3F17",  // Brown
                data: [6,2,8,4]
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

export default EquitySummary;

