import ItemTableRow from './ItemTableRow'

const ItemsList = ({ items, updateItem, deleteItem }) => {
  return (
    <div className='items-list'>
      {items.length > 0 &&
        items.map((item) => (
          <ItemTableRow
            key={item.id}
            item={item}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  )
}

export default ItemsList
