import React, { useState, useCallback } from 'react';
import { Button, Input, message, Typography } from 'antd';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import brandService from '../../../services/brand';
import { Brand } from '../../../interfaces';
import getBrandColumns from './helper'

const { Title } = Typography;

const Brands: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
  const [brandName, setBrandName] = useState<string>('');

  const fetchData = useCallback(async () => {
    try {
      const data = await brandService.getBrands();
      return data;
    } catch (error) {
      message.error('Failed to fetch brands');
      return [];
    }
  }, []);

  const handleEdit = (brand: Brand) => {
    setEditingBrand(brand);
    setBrandName(brand.name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  
  const columns = getBrandColumns({ handleEdit, handleDelete });

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
