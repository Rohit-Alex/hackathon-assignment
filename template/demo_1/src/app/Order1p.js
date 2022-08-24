import React from 'react'
import { Table } from "antd";
import { Bar } from 'react-chartjs-2';


const options = {
    plugins: {
        tooltips: {
            backgroundColor: '#fff'
        }
        
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    responsive: true,
    legend: {
        display: true,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    },
    title: {
        display: true,
        text: 'Custom Chart Title',
        fontColor: 'red'
    },
    animation: {
        easing: 'easeInCirc'
    },
    tooltips: {
        backgroundColor: 'green',
        callbacks: {
            label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                console.log(label, 'label')
                if (label) {
                    label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label;
            }
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Loss',
            data: [45, 54, 23, 78, 64, 89, 32],
            backgroundColor: ["#ffbb11", "#50AF95", "#f3ba2f", "#2a71d0", "#50AF95", "#ffbb11", "#f3ba2f"],
        },
    ],
};

const Order1p = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div className="order-container">
            <div className='row'>
                <div className='col-md-6'>
                    {/* <div className="card"> */}
                        {/* <div className="card-body"> */}
                            <Table dataSource={dataSource} columns={columns} pagination={false} />
                        {/* </div> */}
                    {/* </div> */}
                </div>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-body">
                            <Bar options={options} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order1p