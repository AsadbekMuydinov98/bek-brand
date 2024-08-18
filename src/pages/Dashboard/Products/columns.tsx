// src/pages/Products/columns.ts
import { Space, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { getProduct } from '../../../interfaces';

const getColumns = (
  editProduct: (id: string) => void,
  deleteProduct: (id: string) => void
): ColumnsType<getProduct> => [
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
    render: (record: getProduct) => (
      <Space size="middle">
        <Button onClick={() => editProduct(record._id)}>Edit</Button>
        <Button danger onClick={() => deleteProduct(record._id)}>Delete</Button>
      </Space>
    ),
  },
];

export default getColumns;
