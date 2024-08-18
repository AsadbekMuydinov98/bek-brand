// src/pages/Categories/Categories.tsx
import React, { useState, useCallback } from 'react';
import { Button, Input, message, Typography } from 'antd';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import categoryService from '../../../services/category';
import { Category } from '../../../interfaces';
import getCategoryColumns from './helper';

const { Title } = Typography;

const Categories: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryName, setCategoryName] = useState<string>('');

  const fetchData = useCallback(async () => {
    try {
      return await categoryService.getCategories();
    } catch (error) {
      message.error('Failed to fetch categories');
      return [];
    }
  }, []);

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await categoryService.deleteCategory(id);
      message.success('Category deleted successfully');
      fetchData();
    } catch (error) {
      message.error('Failed to delete category');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingCategory(null);
    setCategoryName('');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSave = async () => {
    if (!categoryName.trim()) {
      message.error('Category name cannot be empty');
      return;
    }

    try {
      if (editingCategory) {
        await categoryService.updateCategory(editingCategory._id, { name: categoryName });
        message.success('Category updated successfully');
      } else {
        await categoryService.createCategory({ name: categoryName });
        message.success('Category added successfully');
      }
      handleCancel();
      fetchData();
    } catch (error) {
      message.error('Failed to save category');
    }
  };

  const columns = getCategoryColumns({ handleEdit, handleDelete });

  return (
    <div>
      <UniversalModal visible={isModalVisible} onCancel={handleCancel}>
        <Title>{editingCategory ? 'Edit' : 'Add'} Category</Title>
        <Input
          value={categoryName}
          onChange={handleInputChange}
          placeholder="Enter Category Name"
        />
        <Button type="primary" onClick={handleSave}>
          {editingCategory ? 'Update Category' : 'Add Category'}
        </Button>
      </UniversalModal>
      <Button type="primary" onClick={showModal}>Add New Category</Button>
      <UniversalTable fetchData={fetchData} columns={columns} />
    </div>
  );
};

export default Categories;
