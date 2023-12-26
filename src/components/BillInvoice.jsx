import CountryAndStateDropdown from './CountryAndStateDropdown'

const BillInvoice = ({ countries }) => {
  return (
    <div className='grid-container'>
      <div className='billing'>
        <h5>Bill To:</h5>
        <form className='form'>
          <input type='text' placeholder='Your Client Company' required />
          <input type='text' placeholder='Client GSTIN' required />
          <input type='text' placeholder='Client Address' required />
          <input type='text' placeholder='City' required />
          <CountryAndStateDropdown countries={countries} />
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
