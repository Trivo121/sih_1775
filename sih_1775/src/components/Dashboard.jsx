import React, { useState } from 'react';
import { AlertTriangle, Camera, Users, Activity, Map, Settings, BarChart2, Bell, Briefcase, Compass } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('overview');

  const menuItems = [
    { key: 'overview', label: 'Overview', icon: Activity },
    { key: 'surveillance', label: 'Surveillance', icon: Camera },
    { key: 'alerts', label: 'Alerts', icon: Bell },
    { key: 'analytics', label: 'Analytics', icon: BarChart2 },
    { key: 'personnel', label: 'Personnel', icon: Users },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard title="Active Alerts" value={5} color="text-red-600" icon={AlertTriangle} />
            <StatCard title="Personnel on Duty" value={120} color="text-green-600" icon={Users} />
            <StatCard title="Cameras Online" value="98%" color="text-blue-600" icon={Camera} />
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-lg font-semibold mb-2">Recent AI Insights</h3>
              <ul className="bg-white rounded-lg shadow divide-y">
                <InsightItem title="Unusual movement detected in Sector A" time="10 minutes ago" />
                <InsightItem title="Predicted weather change may affect visibility" time="1 hour ago" />
                <InsightItem title="Resource optimization suggestion for night patrols" time="3 hours ago" />
              </ul>
            </div>
          </div>
        );
      case 'surveillance':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Live Feed</h3>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                Camera Feed Placeholder
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Map View</h3>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <Map className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">AI-Detected Anomalies</h3>
              <ul className="bg-white rounded-lg shadow divide-y">
                <AnomalyItem title="Unidentified vehicle near checkpoint" location="Sector B" time="2 minutes ago" />
                <AnomalyItem title="Unusual heat signature detected" location="Sector C" time="15 minutes ago" />
              </ul>
            </div>
          </div>
        );
      case 'alerts':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Active Alerts</h3>
            <ul className="space-y-2">
              <AlertItem title="Unauthorized Vehicle Detected" type="warning" location="Sector A" time="5 minutes ago" />
              <AlertItem title="Sensor Malfunction" type="error" location="Sector B" time="20 minutes ago" />
              <AlertItem title="Patrol Team Alpha Completed Route" type="success" location="Sector C" time="1 hour ago" />
            </ul>
          </div>
        );
      case 'analytics':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Incident Trends</h3>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <BarChart2 className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Resource Utilization</h3>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <Activity className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Predictive Analysis</h3>
              <ul className="space-y-2">
                <PredictionItem title="Potential Incursion Point" location="Sector A-3" confidence={85} />
                <PredictionItem title="Equipment Failure Risk" location="Outpost B-7" confidence={72} />
                <PredictionItem title="Optimal Patrol Route" location="Sectors C-1 to C-4" confidence={91} />
              </ul>
            </div>
          </div>
        );
      case 'personnel':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Personnel Overview</h3>
              <div className="space-y-2">
                <StatItem label="Total Personnel" value={450} icon={Users} />
                <StatItem label="On Duty" value={120} icon={Briefcase} />
                <StatItem label="On Leave" value={30} icon={Compass} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Deployment Map</h3>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <Map className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Recent Personnel Activities</h3>
              <ul className="space-y-2">
                <ActivityItem title="Patrol Team Alpha completed route" time="2 hours ago" />
                <ActivityItem title="Officer J. Smith reported equipment malfunction" time="4 hours ago" />
                <ActivityItem title="New shift schedule published for next week" time="1 day ago" />
              </ul>
            </div>
          </div>
        );
      default:
        return <div>Content for {selectedMenu}</div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '200px', background: '#001529', color: 'white' }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid #333' }}>
          <h1 style={{ margin: 0 }}>BorderSense AI</h1>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menuItems.map(item => {
            const IconComponent = item.icon;
            return (
              <li 
                key={item.key} 
                onClick={() => setSelectedMenu(item.key)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  cursor: 'pointer',
                  background: selectedMenu === item.key ? '#1890ff' : 'transparent',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <IconComponent style={{ marginRight: '0.5rem' }} size={16} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <header style={{ background: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>{selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1)}</h2>
          <button style={{ padding: '0.5rem 1rem', background: '#1890ff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Generate Report
          </button>
        </header>
        <main style={{ padding: '1rem', background: '#f0f2f5' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Subcomponents
const StatCard = ({ title, value, color, icon: Icon }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-semibold">{title}</h4>
      <Icon className="w-6 h-6 text-gray-400" />
    </div>
    <p className={`text-3xl font-bold ${color}`}>{value}</p>
  </div>
);

const InsightItem = ({ title, time }) => (
  <li className="p-3">
    <p className="font-medium">{title}</p>
    <p className="text-sm text-gray-500">{time}</p>
  </li>
);

const AnomalyItem = ({ title, location, time }) => (
  <li className="p-3">
    <p className="font-medium">{title}</p>
    <p className="text-sm text-gray-600">{location} - {time}</p>
  </li>
);

const AlertItem = ({ title, type, location, time }) => {
  const typeColors = {
    warning: 'text-yellow-600 bg-yellow-100',
    error: 'text-red-600 bg-red-100',
    success: 'text-green-600 bg-green-100',
  };

  return (
    <li className={`p-3 rounded-lg ${typeColors[type]}`}>
      <p className="font-medium">{title}</p>
      <p className="text-sm">{location} - {time}</p>
    </li>
  );
};

const PredictionItem = ({ title, location, confidence }) => (
  <li className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium text-blue-600">{confidence}% confidence</p>
    </div>
  </li>
);

const StatItem = ({ label, value, icon: Icon }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <Icon className="w-5 h-5 text-gray-400 mr-2" />
      <span>{label}</span>
    </div>
    <span className="font-semibold">{value}</span>
  </div>
);

const ActivityItem = ({ title, time }) => (
  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <p className="font-medium">{title}</p>
    <p className="text-sm text-gray-500">{time}</p>
  </li>
);

export default Dashboard;