// src/ProductActions.js
import { Row, Col, Button, InputNumber, Typography } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
const {Text} = Typography

const ProductActions = ({ product, handleAddToCart }) => {  

  return (
    <Row align='middle' justify='center' >
      <Col xs={12} lg={6}  className="quantity-selector">
        <Text>Quantity: </Text>
        <InputNumber min={1} max={10} defaultValue={1} onChange={value => setQuantity(value)} />
      </Col>
      <Col xs={12} lg={6} className="action-buttons">
        <Button onClick={() => handleAddToCart(product)} type="primary" icon={<ShoppingCartOutlined />}>Add To Cart</Button>
        <Button icon={<HeartOutlined />} style={{padding: '0.5rem'}} />
      </Col>
    </Row>
  );
};

export default ProductActions;
