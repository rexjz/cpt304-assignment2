export function sitySelectorDataAdapter(counteryList) {
  console.log('counterList', counteryList)
  const res = []
  for (const country in counteryList) {
    res.push({
      value: country['@CountryID'],
      label: country['@CountryName'],
      children: country['Station']?.map(station => ({
        value: station['@StationID'],
        label: station['@StationName'],
          children: station['City']?.map(city => ({
            value: city['@CityID'],
            label: city['@CityName']
          }))
      }))
    })
  }
  return res
}