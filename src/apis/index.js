
import axios from "axios";

const city_json_url = process.env.PUBLIC_URL + '/cities.json'

export async function getCountryList() {
  const { data } = await axios.get(city_json_url)
  console.log(data)
  return data['Earth']['Country']
}


const whether_pool = [
  {
    "temperature": 2.4, "weathercode": 3,
    "windspeed": 11.9, "winddirection": 95.0,
  },  
  {
    "temperature": 5.4, "weathercode": 3,
    "windspeed": 11.9, "winddirection": 95.0,
  },  
  {
    "temperature": 2.4, "weathercode": 3,
    "windspeed": 11.9, "winddirection": 95.0,
  },
  {
    "temperature": 2.4, "weathercode": 3,
    "windspeed": 11.9, "winddirection": 95.0,
  }
]

export const whether_code_table = {
  0 :	"Sunny",
  1 : "Cloudy",
  2 : "Rainy",
  3 : "Roggy"
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getWheather(city) {
  return Promise.resolve(whether_pool[getRandomInt(whether_pool.length)])
}