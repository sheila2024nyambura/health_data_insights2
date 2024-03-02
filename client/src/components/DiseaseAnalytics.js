import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const DiseaseAnalytics = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        // Fetch data from API  
        // Update the chartData 
       
    
        const diseases = ['Flu', 'Hypertension', 'Diabetes', 'Migraine'];
        const patientsPerDisease = [2, 1, 1, 1];
    
        setChartData({
          labels: diseases,
          datasets: [
            {
              label: 'Patients per Disease',
              data: patientsPerDisease,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      }, []);
    
      return (
        <div>
          <h2>Disease Analytics</h2>
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
      );
    };
    
    export default DiseaseAnalytics;