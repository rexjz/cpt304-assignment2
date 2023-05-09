import logo from './logo.svg';
import './App.css';
import CitySelector from "./components/CitySelector"
import WheatherViewer from "./components/WhetherViewer"

function App() {
  return (
    <div className="App">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>      
            <CitySelector />
          </div>
          <WheatherViewer />
        </div>
    </div>
  );
}

export default App;
