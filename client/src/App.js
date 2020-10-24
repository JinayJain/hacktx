import logo from './logo.svg';
import './App.css';
import Map from './Map/Map';
import { useGoogleMap } from '@react-google-maps/api'

function App() {
  return (
    <div className="App">
      <Map/>
    </div>
  );
}

export default App;
