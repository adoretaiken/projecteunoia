
import React from 'react';
import BrutalistCard from '../components/BrutalistCard';
import { IMPACT_METRICS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Water', count: 400 },
  { name: 'Health', count: 300 },
  { name: 'Educ', count: 200 },
  { name: 'Crisis', count: 500 },
  { name: 'Infra', count: 150 },
];

const Impact = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">The Impact Machine</h1>
        <p className="text-xl md:text-2xl font-bold opacity-70">Live metrics from our implementation tracking engine.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <BrutalistCard className="lg:col-span-2">
          <h2 className="text-2xl font-black uppercase mb-8">Resource Allocation by Sector</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#000" />
                <XAxis dataKey="name" stroke="#000" tick={{fontWeight: 'bold'}} />
                <YAxis stroke="#000" tick={{fontWeight: 'bold'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '2px solid black', borderRadius: '0px' }}
                />
                <Bar dataKey="count" fill="#0338bb" stroke="#000" strokeWidth={2}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0338bb' : '#FF6600'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </BrutalistCard>
        
        <div className="space-y-8">
          {IMPACT_METRICS.map((metric, i) => (
            <BrutalistCard key={i} className="flex justify-between items-center py-4">
              <div>
                <p className="text-sm font-black uppercase opacity-60">{metric.label}</p>
                <p className="text-3xl font-black">{metric.value}</p>
              </div>
              <div className="h-12 w-1 bg-black"></div>
            </BrutalistCard>
          ))}
        </div>
      </div>

      <h2 className="text-4xl font-black uppercase mb-8">Transformation Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <BrutalistCard className="p-0 overflow-hidden">
          <div className="grid grid-cols-2 h-64 border-b-2 border-black">
            <div className="relative">
              <img src="https://picsum.photos/600/600?random=20" alt="Before" className="w-full h-full object-cover grayscale" />
              <span className="absolute top-2 left-2 bg-black text-white px-2 font-black text-xs">BEFORE</span>
            </div>
            <div className="relative border-l-2 border-black">
              <img src="https://picsum.photos/600/600?random=21" alt="After" className="w-full h-full object-cover contrast-125" />
              <span className="absolute top-2 left-2 bg-[#FF6600] text-black px-2 font-black text-xs">AFTER</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black uppercase mb-2">North Bengal Irrigation Pilot</h3>
            <p className="font-bold opacity-70">From seasonal drought to triple-crop cycles using solar-pump integration.</p>
          </div>
        </BrutalistCard>

        <BrutalistCard className="p-0 overflow-hidden">
          <div className="grid grid-cols-2 h-64 border-b-2 border-black">
            <div className="relative">
              <img src="https://picsum.photos/600/600?random=22" alt="Before" className="w-full h-full object-cover grayscale" />
              <span className="absolute top-2 left-2 bg-black text-white px-2 font-black text-xs">BEFORE</span>
            </div>
            <div className="relative border-l-2 border-black">
              <img src="https://picsum.photos/600/600?random=23" alt="After" className="w-full h-full object-cover contrast-125" />
              <span className="absolute top-2 left-2 bg-[#FF6600] text-black px-2 font-black text-xs">AFTER</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black uppercase mb-2">Urban Slum Health Hubs</h3>
            <p className="font-bold opacity-70">Converting shipping containers into primary triage units in Dhaka West.</p>
          </div>
        </BrutalistCard>
      </div>
    </div>
  );
};

export default Impact;
