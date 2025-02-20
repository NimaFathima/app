import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Bot } from 'lucide-react';
import AutomationPage from './pages/AutomationPage';
import CleaningPage from './pages/CleaningPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <header className="bg-white shadow-md">
          <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
            <img 
              src="/logo.png"
              alt="Home Auto Logo" 
              className="h-12 w-auto"
            />
            <h1 className="home-auto-title text-4xl font-bold text-slate-800">
              HOME AUTO
            </h1>
          </div>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<AutomationPage />} />
            <Route path="/cleaning" element={<CleaningPage />} />
          </Routes>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-4xl mx-auto px-6 py-2">
            <div className="flex justify-around">
              <Link
                to="/"
                className="flex flex-col items-center p-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="text-sm font-medium">Automation</span>
              </Link>
              <Link
                to="/cleaning"
                className="flex flex-col items-center p-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Bot className="w-6 h-6" />
                <span className="text-sm font-medium">Cleaning</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;