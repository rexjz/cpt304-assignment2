import logo from './logo.svg';
import './App.css';
import CitySelector from "./components/CitySelector"
import WheatherViewer from "./components/WhetherViewer"
import { getWheather } from './apis';
import { useState } from 'react';
import HolidayViewer from './components/HolidayViewer'
import AccommodationViewer from './components/AccommodationViewer'
import { getAccommodationInfo } from "./apis"

function App() {
  const [region, setRegion] = useState(undefined)
  const [time, setTime] = useState(undefined)
  return (
    <div className="App" style={{padding: '32px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '200px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>      
            <CitySelector onChange={setRegion}/>
            <div style={{ height: '16px' }}/>
            <HolidayViewer region={region} onChange={(holiday) => {
              if(holiday) {
                setTime(holiday.date)
              } else {
                setTime(undefined)
              }
            }}/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px' }}>
            <WheatherViewer time={time} geo={region} datasource={getWheather} adapter={(apiResponse) => { return apiResponse}}/> 
            <div style={{ height: '16px' }}/>
            <AccommodationViewer city={region ? region[2] : undefined} time={time} datasource={getAccommodationInfo} />
          </div>
        </div>
    </div>
  );
}

export default App;
