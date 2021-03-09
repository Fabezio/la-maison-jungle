import logo from './logo.svg'
import './App.css'
import Banner from './banner'

function App () {
  return (
    <div className='App'>
      <Banner />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Salut les clés de 12!</h2>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
