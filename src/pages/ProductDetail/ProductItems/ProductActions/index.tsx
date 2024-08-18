import React, { useState } from 'react';
import { Row, Col, Button, InputNumber, Typography } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface Product {
  title: string;
  price: number;
  amount: number;
}

interface ProductActionsProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, handleAddToCart }) => {
  const [amount, setAmount] = useState<number>(1);

  return (
    <Row align='middle' justify='center'>
      <Col xs={12} lg={6} className="quantity-selector">
        <Text>Quantity: </Text>
        <InputNumber 
          min={1} 
          max={10} 
          defaultValue={1} 
          onChange={(value) => setAmount(value as number)} 
        />
      </Col>
      <Col xs={12} lg={6} className="action-buttons">
        <Button 
          onClick={() => handleAddToCart({ ...product, amount })} 
          type="primary" 
          icon={<ShoppingCartOutlined />}
        >
          Add To Cart
        </Button>
        <Button icon={<HeartOutlined />} style={{ padding: '0.5rem' }} />
      </Col>
    </Row>
  );
};

export default ProductActions;
