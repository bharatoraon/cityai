import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ChatInterface from './components/ChatInterface';
import Visualization from './components/Visualization';
import Table from './components/Table';
import {
  MessageCircle,
  BarChart2,
  Map,
  Table as TableIcon,
  Database,
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [fileUploaded, setFileUploaded] = useState(false);

  const tabIcons = {
    chat: MessageCircle,
    visualizations: BarChart2,
    map: Map,
    table: TableIcon,
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatInterface />;
      case 'visualizations':
      case 'map':
        return <Visualization type={activeTab} />;
      case 'table':
        return (
          <Table
            data={[
              { id: 1, name: 'John Doe', age: 30, city: 'New York' },
              { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
              { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Database className="text-blue-600 mr-2" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">City Engine AI</h1>
        </div>
        <nav className="flex space-x-2">
          {Object.entries(tabIcons).map(([key, Icon]) => (
            <button
              key={key}
              className={`p-2 rounded-md transition-colors ${
                activeTab === key
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(key)}
            >
              <Icon size={20} />
            </button>
          ))}
        </nav>
      </header>
      <main className="flex-grow flex p-6 space-x-6">
        <aside className="w-64 bg-white rounded-lg shadow-md p-4">
          <FileUpload onFileUpload={() => setFileUploaded(true)} />
        </aside>
        <section className="flex-grow bg-white rounded-lg shadow-md p-6">
          {!fileUploaded ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-600">
              <Database size={48} className="mb-4 text-blue-500" />
              <p className="text-xl font-semibold mb-2">No Data Uploaded</p>
              <p className="text-center">
                Please upload a census data file to begin your analysis.
              </p>
            </div>
          ) : (
            renderTabContent()
          )}
        </section>
      </main>
      <footer className="bg-white shadow-md p-4 text-center text-gray-600">
        © 2024 City Engine AI. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
