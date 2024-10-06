// CO2BubbleChart.js
import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LinearScale,
    PointElement,
    LineElement
);

const CO2BubbleChart = () => {
    // Dummy data (replace with your data)
    const data = {
        datasets: [
            {
                label: 'CO2 Emissions by Continent',
                data: [
                    { x: 'North America', r: 14.53, y: 15 }, // Example: (continent, emissions, radius)
                    { x: 'Europe', r: 12.9, y: 48.5 },
                    { x: 'Asia', r: 13.4, y: 78 },
                    { x: 'Africa', r: 12.85, y: 85.7 },
                    { x: 'South America', r: 14.14, y: 51.1 },
                    { x: 'Australia', r:14.69, y:66.7  },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'category',
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
                color: 'white', // Change title text color
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '100%', height: '300px',"marginTop":"70px"}}>
            <Bubble data={data} options={options} />
        </div>
    );
};

export default CO2BubbleChart;
