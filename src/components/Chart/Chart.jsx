import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

export default function Chart({ country, data }) {
  const [dailyData, setDailyData] = useState([])
  const fetchAPI = async () => {
    const initialDailyData = await fetchDailyData()

    setDailyData(initialDailyData)
  }
  useEffect(() => {
    fetchAPI()
  }, [])
  const LineChart = () =>
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              label: 'Death',
              borderColor: 'coral',
              backgroundColor: 'tomato',
              fill: true,
              data: dailyData.map(({ deaths }) => deaths),
            },
            {
              label: 'Infected',
              borderColor: 'orange',
              backgroundColor: 'gold',
              fill: true,
              data: dailyData.map(({ confirmed }) => confirmed),
            },
          ],
        }}
      />
    ) : (
      'Loading...'
    )

  const BarChart = () =>
    data.confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['Orange', 'Green', 'Red'],
              data: [
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current situation in ${country}` },
        }}
      />
    ) : null

  const ChartToDisplay = () => (country ? <BarChart /> : <LineChart />)

  return (
    <div className={styles.container}>
      <ChartToDisplay />
    </div>
  )
}
