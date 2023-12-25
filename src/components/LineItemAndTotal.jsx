import { ReactComponent as PlusCircle } from '../assets/plus-circle.svg'

const LineItemAndTotal = ({ addItem, items }) => {
  let sgstTotal = 0
  let cgstTotal = 0
  let cessTotal = 0
  let subTotal = 0

  for (let i = 0; i < items.length; ++i) {
    sgstTotal += items[i].sgst * items[i].qty
    cgstTotal += items[i].cgst * items[i].qty
    cessTotal += items[i].cess * items[i].qty
    subTotal += items[i].rate * items[i].qty
  }

  return (
    <div className='flex-container'>
      <div className='add-item' onClick={addItem}>
        <PlusCircle />
        <h5>Add Line Item</h5>
      </div>
      <div className='total'>
        <div className='total--item'>
          <h5 className='total--item__wt'>Sub Total</h5>
          <h5>{subTotal}</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>SGST</h5>
          <h5>{sgstTotal}</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>CGST</h5>
          <h5>{cgstTotal}</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>Cess</h5>
          <h5>{cessTotal}</h5>
        </div>
        <div className='total--item total--item__bold'>
          <h5 className='total--item__wt'>Total</h5>
          <h5>{subTotal + sgstTotal + cgstTotal + cessTotal}</h5>
        </div>
      </div>
    </div>
  )
}

export default LineItemAndTotal
