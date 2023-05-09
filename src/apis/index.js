
import axios from "axios";

export function getChinaCities() {
  url = process.env.PUBLIC_URL + '/china_cities.json'
  return axios.get(url)
}

const city_json_url = process.env.PUBLIC_URL + '/cities.json'

export function getGlobalCities() {
  return axios.get(city_json_url)
}

export async function getCountryList() {
  const { data } = await axios.get(city_json_url)
  console.log(data)
  return data['Earth']['Country']
}

export async function getProvinceList(countryID) {
  const { data } = await axios.get(city_json_url)
  console.log(data)
}