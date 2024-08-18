// src/pages/Colors/Colors.tsx
import React, { useState, useCallback } from 'react';
import { Button, Input, message, Typography } from 'antd';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import colorService from '../../../services/color';
import { Color } from '../../../interfaces';
import getColorColumns from './helper';

const { Title } = Typography;

const Colors: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingColor, setEditingColor] = useState<Color | null>(null);
  const [colorName, setColorName] = useState<string>('');

  const fetchData = useCallback(async () => {
    try {
      return await colorService.getColors();
    } catch (error) {
      message.error('Failed to fetch colors');
      return [];
    }
  }, []);

  const handleEdit = (color: Color) => {
    setEditingColor(color);
    setColorName(color.name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const columns = getColorColumns({ handleEdit, handleDelete });

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
