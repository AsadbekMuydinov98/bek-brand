import React from 'react';
import { Form } from 'antd';
import { ContactWrapper } from './style';
import { ContactForm, Info } from '../../components';
import { ContactFormValues } from '../../interfaces';


const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: ContactFormValues) => {
    console.log('Form submitted:', values);
  };

  return (
    <ContactWrapper>
      <Info />
      <ContactForm form={form} handleFinish={handleFinish} />
    </ContactWrapper>
  );
};

export default Contact;
