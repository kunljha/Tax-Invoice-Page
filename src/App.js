import upload from './assets/upload.jpg'

const App = () => {
  return (
    <div className='App'>
      {/* Header */}
      <div className='header'>
        <div className='header--image'>
          <img src={upload} alt='Upload a logo' />
          <div className='header--text'>
            <h5>Upload Logo</h5>
            <p>240 x 240 pixels @ 72 DPI,</p>
            <p>Maximum size of 1MB.</p>
          </div>
        </div>
        <h1>TAX INVOICE</h1>
      </div>

      {/* Form */}
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

      {/* Billing and Invoice */}
      <div className='flex-container'>
        <div className='billing'>
          <h5>Bill To:</h5>
          <form className='form'>
            <input type='text' placeholder='Your Client Company' required />
            <input type='text' placeholder='Client GSTIN' required />
            <input type='text' placeholder='Client Address' required />
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

      {/* Place of supply */}
      <div className='place'>
        <h5>Place of Supply:</h5>
        <select>
          <option disabled selected>
            State
          </option>
          <option value='state1'>State 1</option>
          <option value='state2'>State 2</option>
          <option value='state3'>State 3</option>
        </select>
      </div>

      {/* Notes */}
      <div className='text-area'>
        <h5>Notes</h5>
        <textarea placeholder='Type your notes here...'></textarea>
      </div>

      {/* Terms and Conditions */}
      <div className='text-area'>
        <h5>Terms & Conditions</h5>
        <textarea placeholder='Please make the payment by due date'></textarea>
      </div>
    </div>
  )
}

export default App
