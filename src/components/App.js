// import logo from '../assets/logo.svg'
import '../styles/App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App () {
  return (
    <div className='App'>
      <Banner />
      <ShoppingList />

      <Cart />
    </div>
  )
}

export default App
