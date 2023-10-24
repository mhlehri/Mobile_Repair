import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const LineChart = () => {
    return (
        
        <BarChart width={700} height={500} data={data}>
          <Bar dataKey="uv" fill="#5C1AC3" strokeWidth={10} />
          <Bar dataKey="pv" fill="#F4CE14" strokeWidth={10} />
          <Bar dataKey="amt" fill="#141E46" strokeWidth={10} />
          <Tooltip></Tooltip>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Legend></Legend>
        </BarChart>
      
    );
};

export default LineChart;