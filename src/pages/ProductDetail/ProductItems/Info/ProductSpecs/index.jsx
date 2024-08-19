import {Typography} from 'antd'
const {Paragraph} = Typography
const ProductSpecs = ({product}) => {
  return (
    <div>
      <Paragraph>Availability: <span>In stock</span></Paragraph>
      <Paragraph>Category: <span>{product.category.name}</span></Paragraph>
      <Paragraph>Free shipping: <span>Yes</span></Paragraph>
    </div>
  )
}

export default ProductSpecs
