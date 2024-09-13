import React from 'react';
import { Bar } from 'react-chartjs-2';

const AdminDashboard = () => {
  const data = {
    labels: ['Fever', 'Cough', 'Fatigue'],
    datasets: [
      {
        label: '# of Cases',
        data: [12, 19, 3], // Example data from the backend
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <h2>Health Trends Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default AdminDashboard;
