import { Button } from 'antd';
import { Color } from '../../../interfaces';

interface ColorColumnsProps {
  handleEdit: (color: Color) => void;
  handleDelete: (id: string) => void;
}

const getColorColumns = ({ handleEdit, handleDelete }: ColorColumnsProps) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 200,
    render: (record: Color) => (
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

export default getColorColumns;
