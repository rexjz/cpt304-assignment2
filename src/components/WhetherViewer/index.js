import { useEffect, useState } from "react"
import './index.css'
import { whether_code_table } from "../../apis";

export default function WheatherViewer(props) {
  const { datasource, adapter ,time, geo} = props;
  console.log("time, geo", time, geo)
  const [whether, setWhether] = useState(undefined)
  useEffect(() => {
    if(time && geo) {
      console.log("datasource(geo, time)")
      datasource(geo, time).then(resp => {
        console.log("resp", resp)
        setWhether(adapter(resp))
      })
    }
  }, [datasource, adapter, time, geo]);

  return (
    <div className="wheather-viewer-container">
      {
        whether ? (
          <div className="wheather-viewer-table">
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>{whether_code_table[whether.weathercode]}</div>
            <div>temperature: {whether.temperature} °C</div>
            <div>windspeed: {whether.windspeed} m/s</div>
          </div>)
        : <div>no data</div>
      }
    </div>
  )
}