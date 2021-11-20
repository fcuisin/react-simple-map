import React, {Component} from 'react';

import './App.css';
import Map from './Map';
import FlatsList from './FlatsList';
import flats from './data/flats';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    }
  }

  selectedFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {

    return (
      <div className="App">
          <FlatsList flats={flats} selectedFlat={this.selectedFlat}/>
        <div className="Map-container">
          <Map long={this.state.selectedFlat.lng} lat={this.state.selectedFlat.lat}/>
        </div>
      </div>
    );

  }
}

export default App;
