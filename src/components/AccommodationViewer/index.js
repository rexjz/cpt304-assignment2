import { useEffect, useState } from "react"

export default function AccommodationViewer(props) {
  const [acc, setAcc] = useState()
  const {city, time, datasource, adapter=(input) => input} = props
  useEffect(()=> {
    if(datasource && adapter && city && time) {
      console.log('safe')
      datasource(time, city).then(resp => {
        setAcc(adapter(resp))
      })
    }
  }, [datasource, adapter, city, time])
  return (
    <div>
      {acc ? (
        <div>
          {acc.hotel_name}
          {acc.room_type}
          {acc.price} / night
        </div>) : <div>no data</div>
      }
    </div>
  )
}