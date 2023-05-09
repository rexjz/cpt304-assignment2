import logo from './logo.svg';
import './App.css';
import CitySelector from "./components/CitySelector"
import WheatherViewer from "./components/WhetherViewer"
import { getWheather } from './apis';
import { useState } from 'react';

function App() {
  const [region, setRegion] = useState(undefined)
  const [time, setTime] = useState('')
  return (
    <div className="App">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>      
            <CitySelector onChange={setRegion}/>
          </div>
          <WheatherViewer time='2019-1-1' geo={region} datasource={getWheather} adapter={(apiResponse) => { return apiResponse}}/>
        </div>
    </div>
  );
}

export default App;
