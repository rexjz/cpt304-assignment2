import { useEffect, useState } from "react"
import { getCountryList } from  "../../apis"
import { sitySelectorDataAdapter } from "../../adapters"
import { Cascader } from 'antd';
import './index.css'

export default function CitySelector() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCountryList().then( resp => {
      setOptions(sitySelectorDataAdapter(resp))
    }
    )
  }, [])
  
  
  return (
    <div className="city-selector-container">
      <Cascader options={options} placeholder="Please select" />
    </div>
  )
}