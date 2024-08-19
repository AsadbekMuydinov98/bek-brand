import { Typography } from 'antd';
import valuesText from './helper';

const { Title } = Typography;

const Values = () => {
  return (
    <div className="values">
      <Title level={2}>Our Values</Title>
      <ul>
        {valuesText.map((value) => (
          <li key={value.title}>
            <strong>{value.title}:</strong> {value.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Values;
