import Light from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({ scaleValue, careType }) => {
  //   const { scaleValue, careType } = props
  const range = [1, 2, 3]
  const scaleType =
    careType === 'light' ? (
      <img src={Light} alt='sun-icon' />
    ) : (
      <img src={Water} alt='water-icon' />
    )
  return (
    <div>
      {range.map(
        rangeElem =>
          scaleValue >= rangeElem && (
            <span key={rangeElem.toString()}>{scaleType}</span>
          )
      )}
    </div>
  )
}
export default CareScale
