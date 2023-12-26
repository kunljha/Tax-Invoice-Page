import { useState } from 'react'

const BillInvoice = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState('Country')
  const [selectedState, setSelectedState] = useState('')

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
  }

  return (
    <div className='grid-container'>
      <div className='billing'>
        <h5>Bill To:</h5>
        <form className='form'>
          <input type='text' placeholder='Your Client Company' required />
          <input type='text' placeholder='Client GSTIN' required />
          <input type='text' placeholder='Client Address' required />
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
      </div>
      <div className='invoice'>
        <div className='invoice--control'>
          <h5>Invoice#</h5>
          <input type='text' placeholder='INV-12' />
        </div>
        <div className='invoice--control'>
          <h5>Invoice Date</h5>
          <input type='date' />
        </div>
        <div className='invoice--control'>
          <h5>Due Date</h5>
          <input type='date' />
        </div>
      </div>
    </div>
  )
}

export default BillInvoice
