import ItemTableRow from './ItemTableRow'

const ItemsList = ({ items, updateItem }) => {
  return (
    <div className='items-list'>
      {items.length > 0 &&
        items.map((item) => (
          <ItemTableRow key={item.id} item={item} updateItem={updateItem} />
        ))}
    </div>
  )
}

export default ItemsList
