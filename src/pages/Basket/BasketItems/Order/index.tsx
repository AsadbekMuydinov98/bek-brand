import React from 'react';
import { Button, Col } from 'antd';
import Schet from './Schet';

interface OrderProps {
  calculateTotal: number;
  couponCode?: string;
  showModal: () => void;
}

const Order: React.FC<OrderProps> = ({ calculateTotal, couponCode, showModal }) => {
  const shippingFee = 20;

  return (
    <Col xs={24} lg={8}>
      <div className="order-summary">
        <Schet title={'Subtotal:'} summ={`$${(calculateTotal - shippingFee).toFixed(2)}`} />
        <Schet title={'Shipping fee:'} summ={`$${shippingFee}`} />
        <Schet title={'Coupon:'} summ={couponCode ? couponCode : "No"} />
        <Schet title={'TOTAL:'} summ={`$${calculateTotal.toFixed(2)}`} />
        <Button
          type="primary"
          block
          style={{ marginTop: 16 }}
          onClick={showModal}
        >
          Check out
        </Button>
      </div>
    </Col>
  );
};

export default Order;
