import { ReactComponent as PlusCircle } from '../assets/plus-circle.svg'

const LineItemAndTotal = ({ addItem, items }) => {
  let sgstTotal = 0
  let cgstTotal = 0
  let cessTotal = 0
  let subTotal = 0

  for (let i = 0; i < items.length; ++i) {
    const { qty, rate, sgst, cgst, cess, amount } = items[i]

    sgstTotal += qty * (sgst / 100) * rate
    cgstTotal += qty * (cgst / 100) * rate
    cessTotal += qty * (cess / 100) * rate
    subTotal += amount
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
          <h5>{subTotal.toFixed(2)}</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>SGST</h5>
          <h5>{sgstTotal.toFixed(2)}</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>CGST</h5>
          <h5>{cgstTotal.toFixed(2)}</h5>
        </div>
        <div className='total--item'>
          <h5 className='total--item__wt'>Cess</h5>
          <h5>{cessTotal.toFixed(2)}</h5>
        </div>
        <div className='total--item total--item__bold'>
          <h5 className='total--item__wt'>Total</h5>
          <h5>{(subTotal + sgstTotal + cgstTotal + cessTotal).toFixed(2)}</h5>
        </div>
      </div>
    </div>
  )
}

export default LineItemAndTotal
