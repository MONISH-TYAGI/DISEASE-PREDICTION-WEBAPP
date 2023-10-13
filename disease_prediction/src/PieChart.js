import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'; // Import Chart and ArcElement

Chart.register(ArcElement); // Register ArcElement

const PieChart = (props) => {
  let percentage=props.percentage;
 
  // setNum(parseInt(percentage, 10))
  const [chartData, setChartData] = useState(
    {
      labels: ['Label 1', 'Label 2'],
      datasets: [
        {
          data: [props.percentage,100-props.percentage], // Initial data
          backgroundColor: [ 'red','#1AACAC'],
        },
      ],
    }
  );
  useEffect(() => {
    // Update the chartData when props.percentage changes
    setChartData({
      labels: ['Label 1', 'Label 2'],
      datasets: [
        {
          data: [props.percentage, 100 - props.percentage],
          backgroundColor: ['red', '#1AACAC'],
        },
      ],
    });
  }, [props.percentage]);
  
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
            <span className='text-5xl  font-bold'> {props.percentage} </span>
            </div>
        </div>
      
  
  );
};

export default PieChart;
