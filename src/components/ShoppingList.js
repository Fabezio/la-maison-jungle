import plantList from '../data/plantList'
import '../styles/ShoppingList.css'
// import CareScale from './CareScale'
import PlantItem from './PlantItem'
// import PropTypes from 'prop-types'
// console.log(plantList)
const ShoppingList = () => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )
  return (
    <div>
      <ul className='lmj-plant-list'>
        {categories.map(cat => (
          <li className='lmj-plant-item' key={cat}>
            {cat}
          </li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, light, water }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
