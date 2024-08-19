import {Typography} from 'antd'

const {Paragraph } = Typography

const Price = ({product}) => {
  return (
    <Paragraph className="price">
      <span className="original-price">${product.price}</span>
      <span className="discounted-price">${product.price * (1 - product.discountPercent/100)}</span>
      <span className="discount">{product.discountPercent}% Off</span>
    </Paragraph>
  )
}

export default Price
