import logo from './logo.svg';
import './App.css';
import CitySelector from "./components/CitySelector"
import WheatherViewer from "./components/WeatherViewer"
import { getWheather } from './apis';
import { useState } from 'react';
import HolidayViewer from './components/HolidayViewer'
import AccommodationViewer from './components/AccommodationViewer'
import { getAccommodationInfo, getHolidays } from "./apis"
import { getCountryList } from  "./apis"
import { sitySelectorDataAdapter } from "./adapters"

function App() {
  const [region, setRegion] = useState(undefined)
  const [destination, setDesination] = useState(undefined)
  const [time, setTime] = useState(undefined)
  return (
    <div className="App" style={{padding: '32px'}}>
        <div style={{width: '600px', display: 'flex', justifyContent: 'center', fontSize:'32px'}}>
          Vacation Assistant
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '200px', marginTop: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>      
            <div style={{ display: 'flex' }}>
            {"Desination:  "} <CitySelector onChange={setDesination} placeholder="Please select where you want to go" datasource={getCountryList} adapter={sitySelectorDataAdapter} />
            </div>
            <div style={{ height: '16px' }}/>
            <div style={{ display: 'flex' }}>
            {"Residing Place:  "}  <CitySelector onChange={setRegion} placeholder="Please where you are residing" datasource={getCountryList} adapter={sitySelectorDataAdapter} />
            </div>
            <div style={{ height: '16px' }}/>
            <HolidayViewer adapter={(input) => input} region={region} datasource={getHolidays} onChange={(holiday) => {
              if(holiday) {
                setTime(holiday.date)
              } else {
                setTime(undefined)
              }
            }}/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', width: '200px' }}>
            <WheatherViewer time={time} geo={destination} datasource={getWheather} adapter={(apiResponse) => { return apiResponse}}/> 
            <div style={{ height: '16px' }}/>
            <AccommodationViewer city={destination} time={time} datasource={getAccommodationInfo} />
          </div>
        </div>
    </div>
  );
}

export default App;
