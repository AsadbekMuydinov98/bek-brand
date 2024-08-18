import React, { useState, ChangeEvent, FocusEvent } from 'react';
import { Card as AntdCard, Form, Input, Button, Row, Col, Typography } from 'antd';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const { Title } = Typography;

interface PaymentFormState {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: 'number' | 'expiry' | 'cvc' | 'name' | ''; 
}

interface PaymentFormProps {
  order: () => void; 
}

const PaymentForm: React.FC<PaymentFormProps> = ({ order }) => {
  const [state, setState] = useState<PaymentFormState>({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (name === 'number') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 16);
      setState((prev) => ({ ...prev, number: formattedValue }));
    } else if (name === 'expiry') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 4);
      const month = formattedValue.slice(0, 2);
      const year = formattedValue.slice(2, 4);
      setState((prev) => ({ ...prev, expiry: `${month}${year ? '/' + year : ''}` }));
    } else if (name === 'cvc') {
      setState((prev) => ({ ...prev, cvc: value.replace(/\D/g, '').slice(0, 4) }));
    } else if (name === 'name') {
      setState((prev) => ({ ...prev, name: value }));
    }
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name as 'number' | 'expiry' | 'cvc' | 'name' }));
  };

  const handleFinish = () => {
    console.log('Form submitted with values:', state);
    order(); // Call the order function
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>
        Payment Form
      </Title>
      <Row gutter={16}>
        <Col xs={24}>
          <AntdCard>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus as 'number' | 'expiry' | 'cvc' | 'name'}
            />
          </AntdCard>
        </Col>

        <Col xs={24}>
          <AntdCard title="Card Details">
            <Form onFinish={handleFinish} layout="vertical">
              <Form.Item>
                <Input
                  type="text"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={19}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={5}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={4}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Pay
                </Button>
              </Form.Item>
            </Form>
          </AntdCard>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentForm;
