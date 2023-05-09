import { useEffect, useState } from 'react'
import { getHolidays } from "../../apis"
import { Input, Radio, Space } from 'antd';
import './index.css'

export default function HolidayViewer(props) {
  const { region, adapter=(input) => input, onChange: deliver = ()=>{} } = props
  const [ holidays, setHolidays ] = useState([])

  useEffect(() => {
    if(region) {
      getHolidays(region.country).then(resp => {
        setHolidays(adapter(resp))
        console.log(resp)
      })
    }
  }, [region])

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    deliver(holidays[e.target.value])
  };

  return (
    <div className="holiday-viewer-container">
      {
        holidays && holidays.length > 0 ?
          <div>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                {holidays.map((holiday, index) => (
                  <Radio value={index} key={index} style={{width: '100%'}}>
                    <div style={{display: 'flex', padding: '12px'}}>
                      {holiday.date}
                      {'  '}
                      {holiday.localName}
                    </div>
                  </Radio>
                ))}
            </Space>
            </Radio.Group>
          </div> : <div>no data</div>
      }
    </div>
  )
}