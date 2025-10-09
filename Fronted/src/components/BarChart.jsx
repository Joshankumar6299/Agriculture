import React, { useRef, useEffect, useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ labels = [], data = [], title = 'Bar Chart' }) => {
  const chartRef = useRef(null);

  // Generate a color palette: if user provides colors prop later we can use it.
  const bgColors = useMemo(() => {
    if (!data || data.length === 0) return [];
    const palette = [
      'rgba(59,130,246,0.9)',
      'rgba(16,185,129,0.9)',
      'rgba(234,88,12,0.9)',
      'rgba(168,85,247,0.9)',
      'rgba(244,63,94,0.9)',
      'rgba(250,204,21,0.9)',
      'rgba(14,165,233,0.9)',
      'rgba(34,197,94,0.9)',
    ];

    if (data.length <= palette.length) {
      return data.map((_, i) => palette[i % palette.length]);
    }

    // If more bars than palette, generate HSL variants
    const colors = data.map((_, i) => {
      const hue = Math.round((i * 360) / data.length);
      return `hsla(${hue}, 70%, 50%, 0.9)`;
    });
    return colors;
  }, [data]);

  const chartData = useMemo(() => ({
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: bgColors,
        borderColor: 'rgba(15,23,42,0.6)',
        borderWidth: 1,
        barThickness: 28,
      },
    ],
  }), [labels, data, bgColors, title]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: title },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  if (!data || data.length === 0) {
    return (
      <div className="h-48 flex items-center justify-center bg-gray-50 border rounded text-gray-400">
        No data to display
      </div>
    );
  }

  return <Bar ref={chartRef} data={chartData} options={options} />;
};

export default BarChart;
