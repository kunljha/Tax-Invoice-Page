const BillInvoice = () => {
  return (
    <div className='grid-container'>
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
  )
}

export default BillInvoice
