import Header from './components/Header'
import Form from './components/Form'
import BillInvoice from './components/BillInvoice'
import PlaceOfSupply from './components/PlaceOfSupply'
import ItemTableCols from './components/ItemTableCols'
import ItemTableRow from './components/ItemTableRow'
import LineItemAndTotal from './components/LineItemAndTotal'
import Notes from './components/Notes'
import TermsAndConditions from './components/TermsAndConditions'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Form />
      <BillInvoice />
      <PlaceOfSupply />
      <ItemTableCols />
      <ItemTableRow />
      <LineItemAndTotal />
      <Notes />
      <TermsAndConditions />
    </div>
  )
}

export default App
