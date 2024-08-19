import { Button, Input, message, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import { useState } from 'react';
import colorService from '../../../services/color';

const { Title } = Typography;

const Colors = () => {
  const fetchData = colorService.getColors;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingColor, setEditingColor] = useState(null);
  const [colorName, setColorName] = useState('');
  const navigate = useNavigate();

  const handleEdit = (color) => {
    setEditingColor(color);
    setColorName(color.name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await colorService.deleteColor(id);
      message.success('Color deleted successfully');
      fetchData();
    } catch (error) {
      message.error('Failed to delete color');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingColor(null);
    setColorName('');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleInputChange = (e) => {
    setColorName(e.target.value);
  };

  const handleSave = async () => {
    if (!colorName.trim()) {
      message.error('Color name cannot be empty');
      return;
    }

    try {
      if (editingColor) {
        await colorService.updateColor(editingColor._id, { name: colorName });
        message.success('Color updated successfully');
      } else {
        await colorService.createColor({ name: colorName });
        message.success('Color added successfully');
      }
      handleCancel();
      fetchData();
    } catch (error) {
      message.error('Failed to save color');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (text, record) => (
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

  return (
    <div>
      <UniversalModal visible={isModalVisible} onCancel={handleCancel}>
        <Title>{editingColor ? 'Edit' : 'Add'} Color</Title>
        <Input
          value={colorName}
          onChange={handleInputChange}
          placeholder="Enter Color Name"
        />
        <Button type="primary" onClick={handleSave}>
          {editingColor ? 'Update Color' : 'Add Color'}
        </Button>
      </UniversalModal>
      <Button type="primary" onClick={showModal}>Add New Color</Button>
      <UniversalTable fetchData={fetchData} columns={columns} />
    </div>
  );
};

export default Colors;
