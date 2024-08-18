import React from 'react';
import { Typography } from 'antd';
import valuesText from './helper';

const { Title } = Typography;

interface ValueItem {
  title: string;
  description: string;
}

const Values: React.FC = () => {
  return (
    <div className="values">
      <Title level={2}>Our Values</Title>
      <ul>
        {valuesText.map((value: ValueItem) => (
          <li key={value.title}>
            <strong>{value.title}:</strong> {value.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Values;
