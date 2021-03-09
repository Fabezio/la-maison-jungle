import './styles/Banner.css'
import logo from './assets/logo.png'

const Banner = () => (
  <div className='lmj-banner'>
    <img className='lmj-logo' src={logo} alt='logo' />
    <h1 className='lmj-title'>La maison Jungle</h1>
  </div>
)

export default Banner
