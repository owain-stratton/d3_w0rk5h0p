import React from 'react';

import 'normalize.css';
import './App.css';

import ChartWidget from './ChartWidget';

const App = () => (
   <div className="d3-app">
      <div className="d3-app--header">
         <h1>D3.js and React</h1>
      </div>
      <ChartWidget />
   </div>
)

export default App;
