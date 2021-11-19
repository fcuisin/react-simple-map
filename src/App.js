import './App.css';
import Map from './Map';
import FlatsList from './FlatsList';
import Flat from './Flat';

function App() {
  return (
    <div className="App">
      <div className="Flats-container">
        <FlatsList/>
      </div>
      <div className="Map-container">
        <Map/>
      </div>
    </div>
  );
}

export default App;
