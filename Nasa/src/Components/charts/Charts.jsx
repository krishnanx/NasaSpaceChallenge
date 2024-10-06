// CarbonIncreaseChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CarbonIncreaseChart = () => {
    // Dummy data (replace with your data)
    const data = {
        labels: ['Oman', 'Malaysia', 'China', 'India', 'Vietnam', "Indonesia","Bangladesh"],
        datasets: [
            {
                label: 'Carbon Increase (in Million Tons)',
                data: [11.3658162970425,
                     11.7530970844649,
                     13.2997701412112,
                     14.9018647995126,
                     38.2296944926186,
                     36.0543388642352,
                     24.3989995930438
                     ],
                backgroundColor:[ 
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',

                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bar chart
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14, // Change font size for the label
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", // Change font family if needed
                    },
                    color: 'white', // Custom color for the legend label
                },
            },
            title: {
                display: true,
                text: 'Countries with Highest Increase in Carbon Production',
                color:"white"
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks:{
                    color:"white"
                },
                title: {
                    display: true,
                    text: 'Carbon Increase (Million Tons)',
                    color: 'white', 
                },
            },
            y: {
                ticks:{
                    color:"white"
                },
                title: {
                    display: true,
                    text: 'Country',
                    color: 'white', 
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default CarbonIncreaseChart;
