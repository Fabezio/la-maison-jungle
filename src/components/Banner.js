import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

const Banner = () => {
  const title = 'La maison jungle'

  // console.log(currentMonth)
  return (
    <div className='lmj-banner'>
      <div className='lmj-banner-row'>
        <img className='lmj-logo' src={logo} alt='logo' />
        <h1 className='lmj-title'>{title}</h1>
      </div>
      <Recommendation />
    </div>
  )
}

export default Banner
