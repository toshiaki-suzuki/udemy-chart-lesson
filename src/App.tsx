import React from 'react';
import LinePlot from "./component/LinePlot";
import './App.css';
import PiePlot from './component/PiePlot';
import BarPlot from './component/BarPlot';

function App() {
  return (
    <div className="App">
      <LinePlot/>
      <PiePlot/>
      <BarPlot/>
    </div>
  );
}

export default App;
