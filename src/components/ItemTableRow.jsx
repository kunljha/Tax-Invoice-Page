import { useState } from 'react'
import { ReactComponent as XCircle } from '../assets/x-circle.svg'

const ItemTableRow = ({ item, updateItem, deleteItem }) => {
  const [desc, setDesc] = useState(item.desc)
  const [hsn, setHsn] = useState(item.hsn)
  const [qty, setQty] = useState(item.qty)
  const [rate, setRate] = useState(item.rate)
  const [sgst, setSgst] = useState(item.sgst)
  const [cgst, setCgst] = useState(item.cgst)
  const [cess, setCess] = useState(item.cess)

  const handleDescChange = (e) => {
    setDesc(e.target.value)

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

  const handleHsnChange = (e) => {
    setHsn(e.target.value)

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

  const handleQtyChange = (e) => {
    setQty(Number(e.target.value))

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

  const handleRateChange = (e) => {
    setRate(Number(e.target.value))

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

  const handleSgstChange = (e) => {
    setSgst(Number(e.target.value))

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

  const handleCgstChange = (e) => {
    setCgst(Number(e.target.value))

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

  const handleCessChange = (e) => {
    setCess(Number(e.target.value))

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
        ></textarea>
        <input
          type='text'
          placeholder='HSN/SAC'
          value={hsn}
          onChange={handleHsnChange}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={qty}
          onChange={handleQtyChange}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='0.00'
          value={rate}
          onChange={handleRateChange}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={sgst}
          onChange={handleSgstChange}
        />
        <p>{qty * sgst}</p>
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={cgst}
          onChange={handleCgstChange}
        />
        <p>{qty * cgst}</p>
      </div>
      <div>
        <input
          type='number'
          placeholder='0'
          value={cess}
          onChange={handleCessChange}
        />
        <p>{qty * cess}</p>
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
