import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    
    {
      name: 'Page F',
      sales: 2390,
      expence: 3800,
      revenue: 2500,
    },
    {
      name: 'Page F',
      sales: 2390,
      expence: 3800,
      revenue: 2500,
    },
    {
      name: 'Page F',
      sales: 2390,
      expence: 3800,
      revenue: 2500,
    },
    {
      name: 'Page F',
      sales: 2390,
      expence: 3800,
      revenue: 2500,
    },
    {
      name: 'Page F',
      sales: 2390,
      expence: 3800,
      revenue: 2500,
    },
    {
      name: 'Page F',
      sales: 2390,
      expence: 3800,
      revenue: 2500,
    },
    {
      name: 'Page G',
      sales: 3490,
      expence: 4300,
      revenue: 2100,
    },
  ];
  
const LineChart = () => {
    return (
        
        <BarChart width={700} height={500} data={data}>
          <Bar dataKey="sales" fill="#5C1AC3" strokeWidth={10} />
          <Bar dataKey="expence" fill="#F4CE14" strokeWidth={10} />
          <Bar dataKey="revenue" fill="#141E46" strokeWidth={10} />
          <Tooltip></Tooltip>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Legend></Legend>
        </BarChart>
      
    );
};

export default LineChart;