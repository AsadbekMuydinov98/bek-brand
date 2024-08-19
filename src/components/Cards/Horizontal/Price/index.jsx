import { Typography } from "antd";

const { Title, Text } = Typography;
const CardPrice = ({price, originalPrice, discount}) => {
  return (
    <div className="horizontal-pricing">
      <Title level={3} type="success">
      ${price.toFixed(2)}
      </Title>
      <Text delete>${originalPrice.toFixed(2)}</Text>
      <Text type="danger"> {discount}% Off</Text>
    </div>
  )
}

export default CardPrice
