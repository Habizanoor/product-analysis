import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Bar, PieChart, Pie, AreaChart, Area } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='dashboard-container'>
            
            <div className="line-chart">
                <p>MONTH WISE SELL</p>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="bar-chart">
                <p>INVESTMENT VS SELL</p>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="investment" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="sell" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;