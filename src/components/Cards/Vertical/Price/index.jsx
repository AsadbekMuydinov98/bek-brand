
const CardPrice = ({price, originalPrice, discount }) => {
  return (
    <div className="product-price">
      <span className="price">${price}</span>
      <span className="original-price">${originalPrice}</span>
      <span className="discount">{discount}% Off</span>
    </div>
  )
}

export default CardPrice
