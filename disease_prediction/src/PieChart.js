import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'; // Import Chart and ArcElement

Chart.register(ArcElement); // Register ArcElement

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Label 1', 'Label 2'],
    datasets: [
      {
        data: [90,10], // Initial data
        backgroundColor: [ '#F87171','#1AACAC'],
      },
    ],
  });

  // Function to update the chart data
  const updateChartData = () => {
    const newData = [Math.random() * 100, Math.random() * 100, Math.random() * 100];
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: newData,
        },
      ],
    });
  };

  return (
    <div className='w-full h-full '>
        <div className='w-full h-4/5  flex justify-center p-1'>
 
        <Pie data={chartData} />
        </div>
        <div className='w-full h-1/5  flex justify-center'>
            <button className='text-5xl  font-bold'>Tumor Percentage Damage :</button>
            <span className='text-5xl  font-bold'>90%</span>
            </div>
        </div>
      
  
  );
};

export default PieChart;
