import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingChart = ({ transactions }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    }],
  });

  useEffect(() => {
    // Calculate spending by category
    const spendingByCategory = {};
    
    // Only consider debit transactions (spending)
    transactions
      .filter(t => t.type === 'debit')
      .forEach(transaction => {
        const { category, amount } = transaction;
        const absAmount = Math.abs(amount);
        
        if (spendingByCategory[category]) {
          spendingByCategory[category] += absAmount;
        } else {
          spendingByCategory[category] = absAmount;
        }
      });
    
    // Prepare chart data
    const categories = Object.keys(spendingByCategory);
    const amounts = Object.values(spendingByCategory);
    
    // Color palette for categories
    const backgroundColors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
    ];
    
    const borderColors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];
    
    setChartData({
      labels: categories,
      datasets: [{
        data: amounts,
        backgroundColor: backgroundColors.slice(0, categories.length),
        borderColor: borderColors.slice(0, categories.length),
        borderWidth: 1,
      }],
    });
    
  }, [transactions]);

  // Options for chart
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: $${value.toFixed(2)}`;
          }
        }
      }
    },
    cutout: '70%',
    maintainAspectRatio: false,
  };

  // Calculate total spending
  const totalSpending = chartData.datasets[0].data.reduce((sum, value) => sum + value, 0);

  return (
    <div className="spending-widget">
      <div className="widget-header">
        <h2>Spending Breakdown</h2>
      </div>

      <div className="spending-chart">
        <div className="chart-container">
          <Doughnut data={chartData} options={options} />
          <div className="chart-center-text">
            <p>Total</p>
            <h3>${totalSpending.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      <div className="widget-footer">
        <button className="btn-text">View Detailed Analysis</button>
      </div>
    </div>
  );
};

export default SpendingChart; 