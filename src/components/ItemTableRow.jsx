const ItemTableRow = () => {
  return (
    <div className='table-row'>
      <div>
        <textarea placeholder='Enter item name/description'></textarea>
        <input type='text' placeholder='HSN/SAC' />
      </div>
      <div>
        <input type='number' />
      </div>
      <div>
        <input type='text' placeholder='0.00' />
      </div>
      <div>
        <input type='number' />
        <p>0.00</p>
      </div>
      <div>
        <input type='number' />
        <p>0.00</p>
      </div>
      <div>
        <input type='number' />
        <p>0.00</p>
      </div>
      <div>
        <p className='table-row__wt'>200</p>
      </div>
    </div>
  )
}

export default ItemTableRow
