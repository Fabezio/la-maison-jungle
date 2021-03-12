import '../styles/Cart.css'

const Cart = () => {
  const plants = [
    { name: 'monstera', price: 8 },
    { name: 'lierre', price: 10 },
    { name: 'bouquet de fleurs', price: 15 }
  ]
  let total = 0
  const renderPlant = plants.map((plant, i) => {
    total += plant.price
    return (
      <li key={i}>
        {plant.name}: {plant.price}
      </li>
    )
  })
  return (
    <div className='lmj-cart'>
      <ul>{renderPlant}</ul>
      <p>Total: {total}</p>
    </div>
  )
}

export default Cart
