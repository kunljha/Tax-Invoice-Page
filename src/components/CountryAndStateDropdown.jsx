import { useState } from 'react'

const CountryAndStateDropdown = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState('Country')
  const [selectedState, setSelectedState] = useState('')

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
  }

  return (
    <>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option disabled selected>
          Country
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <select value={selectedState} onChange={handleStateChange}>
        <option disabled selected>
          State
        </option>
        {countries
          .find((country) => country.name === selectedCountry)
          ?.states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
      </select>
    </>
  )
}

export default CountryAndStateDropdown
