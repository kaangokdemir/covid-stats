import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'

export default function CountryPicker({ handleCountryChange }) {
  const [countries, setCountries] = useState([])
  const [value, setValue] = useState('')
  const fetchAPI = async () => {
    const initialCountries = await fetchCountries()
    setCountries(initialCountries)
  }
  useEffect(() => {
    fetchAPI()
  }, [])

  const OptionList = () => {
    return countries.map((country) => (
      <option value={country} key={country}>
        {country}
      </option>
    ))
  }
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        className={styles.select}
        value={value}
        onChange={(e) => [
          handleCountryChange(e.target.value),
          setValue(e.target.value),
        ]}
      >
        <option value="">Global</option>
        <OptionList />
      </NativeSelect>
    </FormControl>
  )
}
