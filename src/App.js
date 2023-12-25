import Header from './components/Header'
import Form from './components/Form'
import BillInvoice from './components/BillInvoice'
import PlaceOfSupply from './components/PlaceOfSupply'
import ItemTableCols from './components/ItemTableCols'
import ItemsList from './components/ItemsList'
import LineItemAndTotal from './components/LineItemAndTotal'
import Notes from './components/Notes'
import TermsAndConditions from './components/TermsAndConditions'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([])

  const getRandomInt = (min, max) => {
    // min and max are inclusive in this function
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // add a item
  const addItem = () => {
    const item = {
      id: getRandomInt(1, 1000000),
      desc: '',
      hsn: '',
      qty: 0,
      rate: 0.0,
      sgst: 0,
      cgst: 0,
      cess: 0,
      amount: 0,
    }

    setItems([...items, item])
  }

  return (
    <div className='App'>
      <Header />
      <Form />
      <BillInvoice />
      <PlaceOfSupply />
      <ItemTableCols />
      <ItemsList items={items} />
      <LineItemAndTotal addItem={addItem} />
      <Notes />
      <TermsAndConditions />
    </div>
  )
}

export default App
