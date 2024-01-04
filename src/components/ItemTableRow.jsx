import { useState } from 'react'
import { ReactComponent as XCircle } from '../assets/x-circle.svg'

const ItemTableRow = ({ item, updateItem, deleteItem }) => {
  const [desc, setDesc] = useState('')
  const [hsn, setHsn] = useState('')
  const [qty, setQty] = useState(0)
  const [rate, setRate] = useState(0.0)
  const [sgst, setSgst] = useState(0)
  const [cgst, setCgst] = useState(0)
  const [cess, setCess] = useState(0)

  const handleDescChange = (e) => {
    setDesc(e.target.value)
  }

  const handleHsnChange = (e) => {
    setHsn(e.target.value)
  }

  const handleQtyChange = (e) => {
    setQty(Number(e.target.value))
  }

  const handleRateChange = (e) => {
    setRate(Number(e.target.value))
  }

  const handleSgstChange = (e) => {
    setSgst(Number(e.target.value))
  }

  const handleCgstChange = (e) => {
    setCgst(Number(e.target.value))
  }

  const handleCessChange = (e) => {
    setCess(Number(e.target.value))
  }

  const handleBlur = () => {
    const newItem = {
      id: item.id,
      desc,
      hsn,
      qty,
      rate,
      sgst,
      cgst,
      cess,
      amount: qty * rate,
    }
    updateItem(item.id, newItem)
  }

  return (
    <div className='table-row'>
      <div>
        <textarea
          placeholder='Enter item name/description'
          value={desc}
          onChange={handleDescChange}
          onBlur={handleBlur}
        ></textarea>
        <input
          type='text'
          placeholder='HSN/SAC'
          value={hsn}
          onChange={handleHsnChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={qty}
          onChange={handleQtyChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='0.00'
          value={rate}
          onChange={handleRateChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={sgst}
          onChange={handleSgstChange}
          onBlur={handleBlur}
        />
        <p>{(qty * (sgst / 100) * rate).toFixed(2)}</p>
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={cgst}
          onChange={handleCgstChange}
          onBlur={handleBlur}
        />
        <p>{(qty * (cgst / 100) * rate).toFixed(2)}</p>
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={cess}
          onChange={handleCessChange}
          onBlur={handleBlur}
        />
        <p>{(qty * (cess / 100) * rate).toFixed(2)}</p>
      </div>
      <div className='table-row__delete'>
        <p className='table-row__wt'>{qty * rate}</p>
        <div onClick={() => deleteItem(item.id)}>
          <XCircle />
        </div>
      </div>
    </div>
  )
}

export default ItemTableRow
