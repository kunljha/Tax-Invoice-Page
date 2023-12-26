import CountryAndStateDropdown from './CountryAndStateDropdown'

const Form = ({ countries }) => {
  return (
    <form className='form'>
      <input type='text' placeholder='Your Company' required />
      <input type='text' placeholder='Your Name' required />
      <input type='text' placeholder='Company GSTIN' required />
      <input type='text' placeholder='Company Address' required />
      <input type='text' placeholder='City' required />
      <CountryAndStateDropdown countries={countries} />
    </form>
  )
}

export default Form
