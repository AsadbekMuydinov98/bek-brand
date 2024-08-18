import React from 'react';
import { Form, Input, InputNumber, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { Field, SelectOption } from '../../../interfaces';
import './style.css'

const { Option } = Select;
const { TextArea } = Input;

interface UniversalFormProps {
  fields: Field[];
  formik: FormikProps<any>; 
}

const UniversalForm: React.FC<UniversalFormProps> = ({ fields, formik }) => {
  return (
    <>
      {fields.map((field) => {
        const { name, type, label, placeholder, options } = field;
        
        switch (type) {
          case 'text':
          case 'email':
          case 'password':
            return (
              <Form.Item
                className='item'
                key={name}
                label={label}
                validateStatus={formik.errors[name] && formik.touched[name] ? 'error' : ''}
                help={formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : ''}
              >
                <Input
                  type={type}
                  placeholder={placeholder}
                  value={formik.values[name]}
                  onChange={(e) => formik.setFieldValue(name, e.target.value)}
                  onBlur={() => formik.handleBlur(name)}
                />
              </Form.Item>
            );
          case 'number':
            return (
              <Form.Item
                className='item'
                key={name}
                label={label}
                validateStatus={formik.errors[name] && formik.touched[name] ? 'error' : ''}
                help={formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : ''}
              >
                <InputNumber
                className='num-input'
                  placeholder={placeholder}
                  value={formik.values[name]}
                  onChange={(value) => formik.setFieldValue(name, value)}
                  onBlur={() => formik.handleBlur(name)}
                />
              </Form.Item>
            );
          case 'textarea':
            return (
              <Form.Item
                className='item'
                key={name}
                label={label}
                validateStatus={formik.errors[name] && formik.touched[name] ? 'error' : ''}
                help={formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : ''}
              >
                <TextArea
                  placeholder={placeholder}
                  value={formik.values[name]}
                  onChange={(e) => formik.setFieldValue(name, e.target.value)}
                  onBlur={() => formik.handleBlur(name)}
                />
              </Form.Item>
            );
          case 'select':
            return (
              <Form.Item
                className='item'
                key={name}
                label={label}
                validateStatus={formik.errors[name] && formik.touched[name] ? 'error' : ''}
                help={formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : ''}
              >
                <Select
                className='select'
                  placeholder={placeholder}
                  value={formik.values[name]}
                  onChange={(value) => formik.setFieldValue(name, value)}
                  onBlur={() => formik.handleBlur(name)}
                >
                  {options?.map((option: SelectOption) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            );
          case 'upload':
            return (
              <Form.Item
                className='item'
                key={name}
                label={label}
                validateStatus={formik.errors[name] && formik.touched[name] ? 'error' : ''}
                help={formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : ''}
              >
                <Upload
                  listType="picture"
                  beforeUpload={() => false}
                  onChange={(info) => {
                    const fileList = info.fileList.map(file => ({
                      ...file,
                      url: file.response ? file.response.url : file.url,
                    }));
                    formik.setFieldValue(name, fileList);
                  }}
                  onRemove={(file) => {
                    const index = formik.values[name].indexOf(file);
                    const newFileList = formik.values[name].slice();
                    newFileList.splice(index, 1);
                    formik.setFieldValue(name, newFileList);
                  }}
                  multiple
                >
                  <Button icon={<UploadOutlined />}>Upload {label}</Button>
                </Upload>
              </Form.Item>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default UniversalForm;
