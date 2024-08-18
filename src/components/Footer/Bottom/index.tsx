import { Row } from 'antd';
import Copyright from './Copyright';
import Payment from './Payment';
import React from 'react';

const Bottom: React.FC = () => {
  return (
    <Row justify="space-between" align="middle">
      <Copyright />
      <Payment />
    </Row>
  );
}

export default Bottom;
