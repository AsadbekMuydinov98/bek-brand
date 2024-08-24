import { DeleteOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { baseUrl } from "../../constants";

const getImageUrl = (imageUrl) => {
  if (Array.isArray(imageUrl)) {
    return imageUrl[0];
  }
  return imageUrl;
};

export const createColumns = (handleChange, handleDelete) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => `${text}`,
  },
  {
    title: "PRODUCT",
    dataIndex: "images",
    key: "images",
    render: (text, record) => (
      <Space>
        <img
          src={`${baseUrl}/${getImageUrl(text)}`}
          alt={text}
          style={{ width: 50, height: 50, objectFit: 'contain' }}
        />
      </Space>
    ),
  },
  {
    title: "PRICE",
    key: "price",
    render: (text, record) => {
      const { price, discountPercent, count } = record;
      const discountedPrice = price - (price * discountPercent) / 100;
      const totalPrice = discountedPrice * count;
      return `$${totalPrice.toFixed(2)}`;
    },
  },
  {
    title: "Count",
    key: "count",
    render: (text, record) => (
      <Space>
        <MinusCircleOutlined
          onClick={() => handleChange(record.id, Math.max(record.count - 1, 1))}
        />
        {record.count}
        <PlusOutlined onClick={() => handleChange(record.id, record.count + 1)} />
      </Space>
    ),
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: (text, record) => (
      <Button
        type="danger"
        icon={<DeleteOutlined />}
        onClick={() => handleDelete(record._id)}
      />
    ),
  },
];


