import { Form } from 'antd';
import { ContactForm, Info } from '../../components';
import { ContactWrapper } from './style';


const Contact = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <ContactWrapper >
      <Info />
      <ContactForm form={form} handleFinish={handleFinish} />
    </ContactWrapper>
  );
};

export default Contact;