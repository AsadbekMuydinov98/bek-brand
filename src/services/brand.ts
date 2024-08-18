import { service } from '.';

const baseURL = '/brand';

const brandService = {
  getBrands: async () => {
    try {
      const response = await service.get(`${baseURL}`);
      return response;
    } catch (error) {
      console.error('Error fetching brands:', error);
      throw error;
    }
  },

  getBrandById: async (id) => {
    try {
      const response = await service.get(`${baseURL}/${id}`);
      return response;
    } catch (error) {
      console.error(`Error fetching brand with id ${id}:`, error);
      throw error;
    }
  },

  createBrand: async (brandData) => {
    try {
      const response = await service.post(`${baseURL}`, brandData);
      return response;
    } catch (error) {
      console.error('Error creating brand:', error);
      throw error;
    }
  },

  updateBrand: async (id, brandData) => {
    try {
      const response = await service.put(`${baseURL}/${id}`, brandData);
      return response;
    } catch (error) {
      console.error(`Error updating brand with id ${id}:`, error);
      throw error;
    }
  },

  deleteBrand: async (id) => {
    try {
      const response = await service.delete(`${baseURL}/${id}`);
      return response;
    } catch (error) {
      console.error(`Error deleting brand with id ${id}:`, error);
      throw error;
    }
  },
};

export default brandService;
