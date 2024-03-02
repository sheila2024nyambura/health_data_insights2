import React from 'react';
import './App.css';
import DiseaseAnalytics from './components/DiseaseAnalytics';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HealthData Insights</h1>
        </header>
        <main>
          {/*componets */}
          <DiseaseAnalytics />
        </main>
    </div>
  );
}

export default App;
