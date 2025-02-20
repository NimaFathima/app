import React, { useState } from 'react';
import { Power, Bot, Brush } from 'lucide-react';

function CleaningPage() {
  const [robotPower, setRobotPower] = useState(false);
  const [vacuumMode, setVacuumMode] = useState(false);
  const [mopMode, setMopMode] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-6 h-6 text-gray-700" />
          <h2 className="text-xl font-semibold text-gray-800">Cleaning Robot Control</h2>
        </div>
        
        <div className="space-y-4">
          {/* Power Button */}
          <button
            onClick={() => {
              setRobotPower(!robotPower);
              if (!robotPower) {
                setVacuumMode(false);
                setMopMode(false);
              }
            }}
            className={`w-full p-4 rounded-lg flex items-center justify-center gap-2 ${
              robotPower ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Power className="w-6 h-6" />
            <span className="font-medium">{robotPower ? 'Turn Off' : 'Turn On'}</span>
          </button>

          {/* Mode Selection */}
          <div className="grid grid-cols-2 gap-4">
            <button
              disabled={!robotPower}
              onClick={() => setVacuumMode(!vacuumMode)}
              className={`p-4 rounded-lg flex flex-col items-center gap-2 ${
                !robotPower
                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  : vacuumMode
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Bot className="w-6 h-6" />
              <span className="font-medium">Vacuum Mode</span>
            </button>

            <button
              disabled={!robotPower}
              onClick={() => setMopMode(!mopMode)}
              className={`p-4 rounded-lg flex flex-col items-center gap-2 ${
                !robotPower
                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  : mopMode
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Brush className="w-6 h-6" />
              <span className="font-medium">Wet Mopping</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleaningPage;