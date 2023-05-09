import { useCallback, useEffect, useState } from "react"
import { Cascader } from 'antd';
import './index.css'

export default function CitySelector(props) {
  const { onChange: deliver = () => {}, placeholder="please select", datasource, adapter } = props;
  const [options, setOptions] = useState([]);
  const regionOnChange = 
  useEffect(() => {
    if(datasource && adapter ) {
        datasource().then( resp => {
          const opts = adapter(resp)
          setOptions(opts)
        }
      )
    }
  }, [datasource, adapter])


  
  const onChange = useCallback((e) => {
    deliver({
      country: e[0],
      station: e[1],
      city: e[2]
    })
  }, [options])

  return (
    <div className="city-selector-container">
      <Cascader style={{width: '400PX'}} size="large" options={options} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}