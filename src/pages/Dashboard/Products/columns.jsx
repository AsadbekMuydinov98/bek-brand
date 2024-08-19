// src/pages/Products/columns.js
import { Space, Button } from 'antd';

const getColumns = (editProduct, deleteProduct) => [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Brand',
    dataIndex: ['brand', 'name'],
    key: 'brand',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Discount Percent',
    dataIndex: 'discountPercent',
    key: 'discountPercent',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Color',
    dataIndex: ['color', 'name'],
    key: 'color',
  },
  {
    title: 'Category',
    dataIndex: ['category', 'name'],
    key: 'category',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={() => editProduct(record._id)}>Edit</Button>
        <Button danger onClick={() => deleteProduct(record._id)}>Delete</Button>
      </Space>
    ),
  },
];

export default getColumns;
