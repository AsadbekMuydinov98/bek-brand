import React from 'react';
import { Typography } from 'antd';
import './style.css';

interface SchetProps {
  title: string;
  summ: string;
}

const Schet: React.FC<SchetProps> = ({ title, summ }) => {
  return (
    <div className='schet'>
      <Typography.Text strong>{title}</Typography.Text>
      <Typography.Text strong>{summ}</Typography.Text>
    </div>
  );
};

export default Schet;
