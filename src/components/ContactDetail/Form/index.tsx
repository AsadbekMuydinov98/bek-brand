import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form';
import { ContactFormValues } from '../../../interfaces';

interface ContactFormProps {
  form: FormInstance;
  handleFinish: (values: ContactFormValues) => void; 
}

const ContactForm: React.FC<ContactFormProps> = ({ form, handleFinish }) => {
  return (
    <Form form={form} onFinish={handleFinish} className="contact-form">
      <Form.Item
        name="fullname"
        rules={[{ required: true, message: 'Please enter your fullname' }]}
      >
        <Input placeholder="Fullname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <Input.TextArea placeholder="Type your message" rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
