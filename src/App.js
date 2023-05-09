import logo from './logo.svg';
import './App.css';
import CitySelector from "./components/CitySelector"
import WheatherViewer from "./components/WhetherViewer"
import { getWheather } from './apis';
import { useState } from 'react';
import HolidayViewer from './components/HolidayViewer'

function App() {
  const [region, setRegion] = useState(undefined)
  const [time, setTime] = useState(undefined)
  return (
    <div className="App" style={{padding: '32px'}}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>      
            <CitySelector onChange={setRegion}/>
            <HolidayViewer region={region}/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px' }}>
            <WheatherViewer time='2019-1-1' geo={region} datasource={getWheather} adapter={(apiResponse) => { return apiResponse}}/> 
          </div>
        </div>
    </div>
  );
}

export default App;
