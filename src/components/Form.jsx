import { useState } from 'react'

const Form = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState('Country')
  const [selectedState, setSelectedState] = useState('')

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
  }

  return (
    <form className='form'>
      <input type='text' placeholder='Your Company' required />
      <input type='text' placeholder='Your Name' required />
      <input type='text' placeholder='Company GSTIN' required />
      <input type='text' placeholder='Company Address' required />
      <input type='text' placeholder='City' required />
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
    </form>
  )
}

export default Form
