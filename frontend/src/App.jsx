import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">🧠 Accessibility Analyzer</h1>
        <p className="text-center text-sm text-gray-600">Powered by AI</p>
      </header>
      <main className="p-4">
        <Home />
      </main>
    </div>
  );
}

export default App;
