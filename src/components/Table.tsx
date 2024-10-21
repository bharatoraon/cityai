import React from 'react';

interface TableProps {
  data: Array<{ [key: string]: string | number }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="py-3 px-4 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {headers.map((header) => (
                <td key={`${index}-${header}`} className="py-2 px-4">{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;