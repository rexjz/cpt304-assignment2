import { useEffect, useState } from "react"

export default function AccommodationViewer(props) {
  const [acc, setAcc] = useState()
  const {city, time, datasource, adapter=(input) => input} = props
  console.log(city, time, datasource, adapter)
  useEffect(()=> {
    if(datasource && adapter && city && time) {
      console.log('safe')
      datasource(time, city).then(resp => {
        setAcc(adapter(resp))
      })
    }
  }, [datasource, adapter, city, time])
  return (
    <div style={{
      display: 'flex',flexDirection:'column',
      alignItems: 'center', width: '200px',
      border: 'black solid 1px', padding: '16px',
      boxSizing: 'border-box',
      borderRadius: '12px'
    }}>
      <div style={{fontSize: '22px', fontWeight: 'bold'}}>Accommodation Recommendation</div>
      <div style={{height: '32px'}} />
      <div style={{width: '100%'}}>
        {acc ? (
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}>
              <div style={{fontSize: '20px'}}>{acc.hotel_name}</div>
              <div>{acc.room_type}</div>
              <div> {acc.price} dollors / night</div>
          </div>) : <div>no data</div>
        }
      </div>
    </div>
  )
}