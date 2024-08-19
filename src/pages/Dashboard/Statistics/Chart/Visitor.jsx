import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './style.css';

const data = [
  { name: 'Nov', last6Months: 30, previous: 20 },
  { name: 'Dec', last6Months: 45, previous: 35 },
  { name: 'Jan', last6Months: 40, previous: 30 },
  { name: 'Feb', last6Months: 50, previous: 25 },
  { name: 'Mar', last6Months: 70, previous: 40 },
  { name: 'Apr', last6Months: 65, previous: 55 },
  { name: 'May', last6Months: 55, previous: 50 },
  { name: 'Jun', last6Months: 80, previous: 60 },
];

const VisitorStatisticsCard = () => {
  return (
    <div className="visitor-statistics-card">
      <div className="card-header">
        <h4>Visitor statistics</h4>
        <p>Nov - July</p>
        <div className="card-legend">
          <span className="legend-item">
            <span className="dot dot-last6Months"></span> LAST 6 MONTHS
          </span>
          <span className="legend-item">
            <span className="dot dot-previous"></span> PREVIOUS
          </span>
          <div className="card-values">
            <p><strong>475 273</strong></p>
            <p><strong>782 396</strong></p>
          </div>
        </div>
      </div>
      <div className="card-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="last6Months" stroke="#8884d8" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="previous" stroke="#82ca9d" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorStatisticsCard;