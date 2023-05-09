import { useCallback, useEffect, useState } from "react"
import { getCountryList } from  "../../apis"
import { sitySelectorDataAdapter } from "../../adapters"
import { Cascader } from 'antd';
import './index.css'

export default function CitySelector(props) {
  const { onChange: deliver = () => {} } = props;
  const [options, setOptions] = useState([]);
  const regionOnChange = 
  useEffect(() => {
    getCountryList().then( resp => {
      const opts = sitySelectorDataAdapter(resp)
      console.log('sitySelectorDataAdapter(resp)', opts)
      setOptions(opts)
    }
    )
  }, [])
  
  const onChange = useCallback((e) => {
    deliver({
      country: e[0],
      station: e[1],
      city: e[2]
    })
    console.log(e)
  }, [options])

  return (
    <div className="city-selector-container">
      <Cascader style={{width: '400PX'}} size="large" options={options} onChange={onChange} placeholder="Please select" />
    </div>
  )
}