import { useCallback, useEffect, useState } from "react"
import { getCountryList } from  "../../apis"
import { sitySelectorDataAdapter } from "../../adapters"
import { Cascader } from 'antd';
import './index.css'

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default function CitySelector() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCountryList().then( resp => {
      const opts = sitySelectorDataAdapter(resp)
      console.log('sitySelectorDataAdapter(resp)', opts)
      setOptions(opts)
    }
    )
  }, [])
  
  const onChange = useCallback((e) => {
    console.log(e)
  }, [options])

  return (
    <div className="city-selector-container">
      <Cascader style={{width: '400PX'}} size="large" options={options} onChange={onChange} placeholder="Please select" />
    </div>
  )
}