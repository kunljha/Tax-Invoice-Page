import ItemTableRow from './ItemTableRow'

const ItemsList = ({ items }) => {
  return (
    <div className='items-list'>
      {items.length > 0 &&
        items.map((item) => <ItemTableRow key={item.id} item={item} />)}
    </div>
  )
}

export default ItemsList
