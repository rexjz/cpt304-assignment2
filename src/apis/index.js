
import axios from "axios";

const city_json_url = process.env.PUBLIC_URL + '/cities.json'

export async function getCountryList() {
  const { data } = await axios.get(city_json_url)
  return data['Earth']['Country']
}


const whether_pool = [
  {
    "temperature": 2.4, "weathercode": 1,
    "windspeed": 2.9, "winddirection": 95.0,
  },  
  {
    "temperature": 5.4, "weathercode": 2,
    "windspeed": 18.9, "winddirection": 95.0,
  },  
  {
    "temperature": 2.4, "weathercode": 0,
    "windspeed": 7.3, "winddirection": 95.0,
  },
  {
    "temperature": 9.4, "weathercode": 2,
    "windspeed": 8.9, "winddirection": 95.0,
  },  {
    "temperature": 12.4, "weathercode": 0,
    "windspeed": 14.9, "winddirection": 95.0,
  },  
  {
    "temperature": 19.4, "weathercode": 2,
    "windspeed": 11.3, "winddirection": 95.0,
  },  
  {
    "temperature": 30.4, "weathercode": 3,
    "windspeed": 11.6, "winddirection": 95.0,
  },
  {
    "temperature": 2.4, "weathercode": 0,
    "windspeed": 17.8, "winddirection": 95.0,
  }
]

export const whether_code_table = {
  0 :	"Sunny",
  1 : "Cloudy",
  2 : "Rainy",
  3 : "Foggy"
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getWheather(city) {
  return Promise.resolve(whether_pool[getRandomInt(whether_pool.length)])
}

const country_code_table = {
  "China": "CN",
  "United States": "US",
  "Canada": "CA",
  "Australia": "AU"
}

export async function getHolidays(country_id) {
  const code = country_code_table[country_id]
  const holiday_json_url = process.env.PUBLIC_URL + `/holidays-${code}.json`
  const { data } = await axios.get(holiday_json_url)
  return data
}