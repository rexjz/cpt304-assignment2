
import axios from "axios";

function getChinaCities(url = process.env.PUBLIC_URL + '/china_cities.json') {
  return axios.get(url)
}

function getGlobalCities(url = process.env.PUBLIC_URL + '/global_cities.json') {
  return axios.get(url)
}