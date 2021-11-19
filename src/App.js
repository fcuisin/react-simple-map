import React from 'react';

import './App.css';
import Map from './Map';
import FlatsList from './FlatsList';
import flats from './data/flats';


function App() {

  return (
    <div className="App">
        <FlatsList flats={flats}/>
      <div className="Map-container">
        <Map/>
      </div>
    </div>
  );
}

export default App;
