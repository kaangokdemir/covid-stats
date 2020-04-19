import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country = '') => {
  try {
    let updatedURL = country ? `${url}/countries/${country}` : url
    const RES = await axios.get(updatedURL)
    const { confirmed, recovered, deaths, lastUpdate } = RES.data
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }
    return modifiedData
  } catch (err) {
    return { ...err.response }
  }
}

export const fetchDailyData = async () => {
  try {
    const RES = await axios.get(url + '/daily')
    const modifiedData = await RES.data.map(
      ({ confirmed, deaths, reportDate: date }) => ({
        confirmed: confirmed.total,
        deaths: deaths.total,
        date,
      })
    )
    return modifiedData
  } catch (err) {
    return { ...err.response }
  }
}
export const fetchCountries = async () => {
  try {
    const RES = await axios.get(url + '/countries')
    const countries = await RES.data.countries.map((country) => country.name)
    return countries
  } catch (err) {
    return { ...err.response }
  }
}
