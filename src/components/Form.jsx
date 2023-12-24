const Form = () => {
  return (
    <form className='form'>
      <input type='text' placeholder='Your Company' required />
      <input type='text' placeholder='Your Name' required />
      <input type='text' placeholder='Company GSTIN' required />
      <input type='text' placeholder='Company Address' required />
      <input type='text' placeholder='City' required />
      <select>
        <option disabled selected>
          State
        </option>
        <option value='state1'>State 1</option>
        <option value='state2'>State 2</option>
        <option value='state3'>State 3</option>
      </select>
      <select>
        <option disabled selected>
          Country
        </option>
        <option value='country1'>Country 1</option>
        <option value='country2'>Country 2</option>
        <option value='country3'>Country 3</option>
      </select>
    </form>
  )
}

export default Form
