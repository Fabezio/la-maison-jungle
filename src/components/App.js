// import logo from '../assets/logo.svg'
import '../styles/App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'

function App () {
  return (
    <div className='App'>
      <Banner />
      <QuestionForm />
      <ShoppingList />

      <Cart />
    </div>
  )
}

export default App
