export function sitySelectorDataAdapter(counteryList) {
  const res = []
  for (const country of counteryList) {
    res.push({
      value: country['CountryID'],
      label: country['CountryID'],
      children: country['Station']?.map(station => {
        let cities = []
        if(!station['City']) {
          cities = []
        } else if(Array.isArray(station['City'])) {
          cities = station['City'].map(city => ({
            value: city['CityID'],
            label: city['CityID']
          }))
        } else {
          cities = [{
            value: station['City']['CityID'],
            label: station['City']['CityID']
          }]
        }
        return ({
          value: station['StationID'],
          label: station['StationID'],
          children: cities
        })
      })
    })
  }
  return res
}