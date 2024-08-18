import { DeleteOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { baseUrl } from "../../constants";

interface Record {
  id: string;
  images: string | string[];
  price: number;
  discountPercent: number;
  count: number;
  title: string;
  _id: string;
}

const getImageUrl = (imageUrl: string | string[]): string => {
  if (Array.isArray(imageUrl)) {
    return imageUrl[0];
  }
  return imageUrl;
};

type HandleChange = (id: string, newCount: number) => void;
type HandleDelete = (id: string) => void;

export const createColumns = (
  handleChange: HandleChange,
  handleDelete: HandleDelete
) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text: string) => `${text}`,
  },
  {
    title: "PRODUCT",
    dataIndex: "images",
    key: "images",
    render: (text: string | string[], record: Record) => (
      <Space>
        <img
          src={`${baseUrl}/${getImageUrl(text)}`}
          alt={record.title}
          style={{ width: 100, height: 100, objectFit: 'contain' }}
        />
      </Space>
    ),
  },
  {
    title: "PRICE",
    key: "price",
    render: (text: string, record: Record) => {
      const { price, discountPercent, count } = record;
      const discountedPrice = price - (price * discountPercent) / 100;
      const totalPrice = discountedPrice * count;
      return `$${totalPrice.toFixed(2)}`;
    },
  },
  {
    title: "Count",
    key: "count",
    render: (text: string, record: Record) => (
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
    title: "UNIT PRICE",
    dataIndex: "price",
    key: "unitPrice",
    render: (text: number) => `$${text.toFixed(2)}`,
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: (text: string, record: Record) => (
      <Button
        type="danger"
        icon={<DeleteOutlined />}
        onClick={() => handleDelete(record._id)}
      />
    ),
  },
];
