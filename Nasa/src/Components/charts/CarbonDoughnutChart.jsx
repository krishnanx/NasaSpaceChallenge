// CarbonDoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const CarbonDoughnutChart = () => {
    // Dummy data (replace with your data)
    const data = {
        labels: ['Coal', 'Oil', 'Natural Gas', 'Nuclear Energy', 'HydoElectric',"Others"],
        datasets: [
            {
                label: 'World Energy Production',
                data: [164, 196, 144, 25, 40,51],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderWidth:0
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white', // Change legend text color to white
                },
            },
            title: {
                display: true,
                text: 'World Energy Production',
                color:"white"
            },
            
        },
        maintainAspectRatio: false, // Allows customizing width/height
    };

    return (
        <div style={{ width: '300px', height: '300px',display:"flex",justifyContent:"center" , alignItems:"center", flexDirection:"row"}}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default CarbonDoughnutChart;
