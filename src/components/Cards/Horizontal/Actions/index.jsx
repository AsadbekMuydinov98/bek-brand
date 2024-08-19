import { Button } from "antd"
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';


const CardActions = ({onAddToCart, onAddToFavorites }) => {
  return (
    <div className="horizontal-actions">
      <Button type="primary" icon={<ShoppingCartOutlined />} onClick={onAddToCart}>
        Add To Cart
      </Button>
      <Button icon={<HeartOutlined />} onClick={onAddToFavorites}>Wishlist</Button>
    </div>
  )
}

export default CardActions
