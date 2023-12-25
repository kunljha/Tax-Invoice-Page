import { ReactComponent as PlusCircle } from '../assets/plus-circle.svg'

const LineItemAndTotal = ({ addItem }) => {
  return (
    <div className='flex-container'>
      <div className='add-item' onClick={addItem}>
        <PlusCircle />
        <h5>Add Line Item</h5>
      </div>
      <div className='total'>
        <div className='total--item'>
          <h5 className='total--item__wt'>Sub Total</h5>
          <h5>200.00</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>SGST</h5>
          <h5>12.00</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>CGST</h5>
          <h5>12.00</h5>
        </div>
        <div className='total--item total--item__bold'>
          <h5 className='total--item__wt'>Total</h5>
          <h5>224.00</h5>
        </div>
      </div>
    </div>
  )
}

export default LineItemAndTotal
