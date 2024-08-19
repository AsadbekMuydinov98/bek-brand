import { Button, Input, message, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import { useState } from 'react';
import categoryService from '../../../services/category';

const { Title } = Typography;

const Categories = () => {
  const fetchData = categoryService.getCategories;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleEdit = (category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
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

  const handleInputChange = (e) => {
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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="link" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record._id)}>Delete</Button>
        </div>
      ),
    },
  ];

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
