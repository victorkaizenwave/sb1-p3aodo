import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ROIMetricsProps {
  data: {
    campaignCost: number;
    revenue: number;
    roi: number;
    period: string;
  };
}

export const ROIMetrics: React.FC<ROIMetricsProps> = ({ data }) => {
  const chartData = {
    labels: ['Cost', 'Revenue'],
    datasets: [
      {
        data: [data.campaignCost, data.revenue],
        backgroundColor: ['rgba(239, 68, 68, 0.2)', 'rgba(34, 197, 94, 0.2)'],
        borderColor: ['rgb(239, 68, 68)', 'rgb(34, 197, 94)'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    },
    cutout: '70%'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">ROI Overview</h2>
      <div className="text-center mb-6">
        <p className="text-3xl font-bold text-green-600">{data.roi}%</p>
        <p className="text-sm text-gray-500">Return on Investment</p>
        <p className="text-xs text-gray-400">{data.period}</p>
      </div>
      <div className="h-48">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};