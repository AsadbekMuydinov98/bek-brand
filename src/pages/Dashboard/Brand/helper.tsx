import { Button } from 'antd';
import { Brand } from '../../../interfaces';

interface BrandColumnsProps {
  handleEdit: (brand: Brand) => void;
  handleDelete: (id: string) => void;
}

const getBrandColumns = ({ handleEdit, handleDelete }: BrandColumnsProps) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 200,
    render: (record: Brand) => (
      <div>
        <Button type="link" onClick={() => handleEdit(record)}>
          Edit
        </Button>
        <Button type="link" onClick={() => handleDelete(record._id)}>
          Delete
        </Button>
      </div>
    ),
  },
];

export default getBrandColumns;
