import React from 'react'
import { Bar } from "react-chartjs-2"

function FirstYearReturns() {

    const data = {
        labels: ["Year 1","Year 2","Year 3","Year 4"],
        datasets: [
            {
                label: "Cash On Cash",
                radius: 3,
                barPercentage: 0.5,
                categoryPercentage: 0.7,
                data: [4,2.5,3,4],
                borderColor: "#4B176",
                borderColor: ['red'],
                backgroundColor: "#4B176", // Purple
            },  
            {
                label: "ROI",
                barPercentage: 0.5,
                categoryPercentage: 0.6,
                backgroundColor: "#176A1F",  //Green
                data: [3,3,4,8]
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

export default FirstYearReturns;

