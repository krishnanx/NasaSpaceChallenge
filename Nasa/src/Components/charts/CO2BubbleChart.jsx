import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement
);

const CO2BarChart = () => {
    // Data for the bar chart
    const data = {
        labels: [
            'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia'
        ], // Labels representing continents
        datasets: [
            {
                label: 'CO2 Emissions (in Billion Tons)',
                data: [15, 48.5, 78, 85.7, 51.1, 66.7], // CO2 emission values
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ], // Color for each bar
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Continents',
                    color: 'white', // Change x-axis title color
                },
                ticks: {
                    color: 'white', // Change x-axis ticks color
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'CO2 Emissions (in Billion Tons)',
                    color: 'white', // Change y-axis title color
                },
                ticks: {
                    color: 'white', // Change y-axis ticks color
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white', // Change legend text color
                },
            },
            title: {
                display: true,
                text: 'CO2 Emissions by Continent',
                color: 'white', // Change chart title color
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '100%', height: '300px', "marginTop": "70px" }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default CO2BarChart;
