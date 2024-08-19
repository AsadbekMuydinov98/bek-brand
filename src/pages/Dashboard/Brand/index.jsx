import { Button, Input, message, Typography } from 'antd';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import { useState } from 'react';
import brandService from '../../../services/brand';

const { Title } = Typography;

const Brands = () => {
  const fetchData = brandService.getBrands;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [brandName, setBrandName] = useState('');

  const handleEdit = (brand) => {
    setEditingBrand(brand);
    setBrandName(brand.name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await brandService.deleteBrand(id);
      message.success('Brand deleted successfully');
      fetchData();
    } catch (error) {
      message.error('Failed to delete brand');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingBrand(null);
    setBrandName('');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleInputChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleSave = async () => {
    if (!brandName.trim()) {
      message.error('Brand name cannot be empty');
      return;
    }

    try {
      if (editingBrand) {
        await brandService.updateBrand(editingBrand._id, { name: brandName });
        message.success('Brand updated successfully');
      } else {
        await brandService.createBrand({ name: brandName });
        message.success('Brand added successfully');
      }
      handleCancel();
      fetchData();
    } catch (error) {
      message.error('Failed to save brand');
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
          <Button type="link" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record._id)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <UniversalModal visible={isModalVisible} onCancel={handleCancel}>
        <Title>{editingBrand ? 'Edit' : 'Add'} Brand</Title>
        <Input
          value={brandName}
          onChange={handleInputChange}
          placeholder="Enter Brand Name"
        />
        <Button type="primary" onClick={handleSave}>
          {editingBrand ? 'Update Brand' : 'Add Brand'}
        </Button>
      </UniversalModal>
      <Button type="primary" onClick={showModal}>Add New Brand</Button>
      <UniversalTable fetchData={fetchData} columns={columns} />
    </div>
  );
};

export default Brands;
