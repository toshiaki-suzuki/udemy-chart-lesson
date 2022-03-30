import React from 'react';
import LinePlot from "./component/LinePlot";
import './App.css';
import PiePlot from './component/PiePlot';

function App() {
  return (
    <div className="App">
      <LinePlot/>
      <PiePlot/>
    </div>
  );
}

export default App;
