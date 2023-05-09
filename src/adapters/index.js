export function sitySelectorDataAdapter(counteryList) {
  const res = []
  for (const country of counteryList) {
    console.log(country)
    res.push({
      value: country['CountryID'],
      label: country['CountryName'],
      children: country['Station']?.map(station => {
        let cities = []
        if(!station['City']) {
          cities = []
        } else if(Array.isArray(station['City'])) {
          cities = station['City'].map(city => ({
            value: city['CityID'],
            label: city['CityName']
          }))
        } else {
          cities = [{
            value: station['City']['CityID'],
            label: station['City']['CityName']
          }]
        }
        return ({
          value: station['StationID'],
          label: station['StationName'],
          children: cities
        })
      })
    })
  }
  return res
}