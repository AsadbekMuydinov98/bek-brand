import { Button } from 'antd';
import { Category } from '../../../interfaces';

interface CategoryColumnsProps {
  handleEdit: (category: Category) => void;
  handleDelete: (id: string) => void;
}

const getCategoryColumns = ({ handleEdit, handleDelete }: CategoryColumnsProps) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 200,
    render: (record: Category) => (
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

export default getCategoryColumns;
