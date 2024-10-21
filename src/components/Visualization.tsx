import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface VisualizationProps {
  type: 'visualizations' | 'map';
}

const dummyData = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 200 },
  { name: 'Category D', value: 278 },
  { name: 'Category E', value: 189 },
];

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Visualization: React.FC<VisualizationProps> = ({ type }) => {
  if (type === 'visualizations') {
    return (
      <div className="h-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Data Visualization</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  } else if (type === 'map') {
    return (
      <div className="h-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Geographic Visualization</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ComposableMap projectionConfig={{ scale: 147 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    stroke="#FFF"
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#4F46E5', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    );
  }

  return null;
};

export default Visualization;