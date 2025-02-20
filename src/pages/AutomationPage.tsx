import React, { useState } from 'react';
import { Thermometer, Droplets, Power } from 'lucide-react';

function AutomationPage() {
  const [temperature, setTemperature] = useState(23.5);
  const [humidity, setHumidity] = useState(45);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Sensor Readings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <Thermometer className="w-8 h-8 text-red-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Temperature</h2>
              <p className="text-3xl font-bold text-gray-900">{temperature}°C</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Humidity</h2>
              <p className="text-3xl font-bold text-gray-900">{humidity}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Switch Controls */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Switch Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setSwitch1(!switch1)}
            className={`p-4 rounded-lg flex items-center justify-between ${
              switch1 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <span className="font-medium">Switch 1</span>
            <Power className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setSwitch2(!switch2)}
            className={`p-4 rounded-lg flex items-center justify-between ${
              switch2 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <span className="font-medium">Switch 2</span>
            <Power className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AutomationPage;