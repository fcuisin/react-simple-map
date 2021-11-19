import React from 'react';

import './App.css';
import Map from './Map';
import FlatsList from './FlatsList';
import flats from './data/flats';


function App() {

  return (
    <div className="App">
      <div className="Flats-container">
        <FlatsList flats={flats}/>
      </div>
      <div className="Map-container">
        <Map/>
      </div>
    </div>
  );
}

export default App;
