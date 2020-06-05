import React, { useEffect, useState } from 'react';
import { fetchDailyData, fetchdata } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailydata] = useState([]);

    useEffect(() => {
        const fechApi = async () => {
            setDailydata(await fetchDailyData());
        }

        fechApi();
    }, []);
    const linechart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true
                        }],
                    }}
                />
            ) : null

    );
    console.log(confirmed, recovered, deaths);
    const barchart = (
        confirmed
            ? (
                //{{one for making code dynamic second for opening an onj}}
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0,0,255,0.5)',
                                ' rgba(0,255,0,0.5)',
                                ' rgba(255,0,0,0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}

                />
            ) : null

    )
    return (
        <div className="container">
            {country ? barchart : linechart}
        </div>
    )
}
export default Chart;