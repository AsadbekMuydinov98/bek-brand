import { Form, Input, InputNumber, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css'

const { Option } = Select;
const { TextArea } = Input;

const UniversalForm = ({ fields, formik }) => {
  return (
    <>
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
          case 'email':
          case 'password':
            return (
              <Form.Item
                className='item'
                key={field.name}
                label={field.label}
                validateStatus={formik.errors[field.name] && formik.touched[field.name] ? 'error' : ''}
                help={formik.errors[field.name] && formik.touched[field.name] ? formik.errors[field.name] : ''}
              >
                <Input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>
            );
          case 'number':
            return (
              <Form.Item
                className='item'
                key={field.name}
                label={field.label}
                validateStatus={formik.errors[field.name] && formik.touched[field.name] ? 'error' : ''}
                help={formik.errors[field.name] && formik.touched[field.name] ? formik.errors[field.name] : ''}
              >
                <InputNumber
                  className='num-input'
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formik.values[field.name]}
                  onChange={(value) => formik.setFieldValue(field.name, value)}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>
            );
          case 'textarea':
          return (
            <Form.Item
              className='item'
              key={field.name}
              label={field.label}
              name={field.name}
              rules={[{ required: true, message: `Please input ${field.label}!` }]}
            >
              <TextArea
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
              />
            </Form.Item>
          );
          case 'select':
            return (
              <Form.Item
                className='item'
                key={field.name}
                label={field.label}
                validateStatus={formik.errors[field.name] && formik.touched[field.name] ? 'error' : ''}
                help={formik.errors[field.name] && formik.touched[field.name] ? formik.errors[field.name] : ''}
              >
                <Select
                  className='select'
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formik.values[field.name]}
                  onChange={(value) => formik.setFieldValue(field.name, value)}
                  onBlur={formik.handleBlur}
                >
                  {field.options.map((option) => (
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
                key={field.name}
                label={field.label}
                validateStatus={formik.errors[field.name] && formik.touched[field.name] ? 'error' : ''}
                help={formik.errors[field.name] && formik.touched[field.name] ? formik.errors[field.name] : ''}
              >
                <Upload
                  name={field.name}
                  listType="picture"
                  beforeUpload={() => {
                    return false;
                  }}
                  onChange={(info) => {
                    const fileList = info.fileList.map(file => ({
                      ...file,
                      url: file.response ? file.response.url : file.url,
                    }));
                    formik.setFieldValue(field.name, fileList);
                  }}
                  onRemove={(file) => {
                    const index = formik.values[field.name].indexOf(file);
                    const newFileList = formik.values[field.name].slice();
                    newFileList.splice(index, 1);
                    formik.setFieldValue(field.name, newFileList);
                  }}
                  multiple
                >
                  <Button icon={<UploadOutlined />}>Upload {field.label}</Button>
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
