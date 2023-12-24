const PlaceOfSupply = () => {
  return (
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
  )
}

export default PlaceOfSupply
