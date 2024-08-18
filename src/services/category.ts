import { service } from '.'; 

const categoryService = {
  getCategories: async () => {
    try {
      const response = await service.get('/category/get-all');
      return response;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  getCategoryById: async (id) => {
    try {
      const response = await service.get(`/category/get-one/${id}`);
      return response;
    } catch (error) {
      console.error(`Error fetching category with id ${id}:`, error);
      throw error;
    }
  },

  createCategory: async (data) => {
    try {
      const response = await service.post('/category/create', data);
      return response;
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  },

  updateCategory: async (id, data) => {
    try {
      const response = await service.put(`/category/update/${id}`, data);
      return response;
    } catch (error) {
      console.error(`Error updating category with id ${id}:`, error);
      throw error;
    }
  },

  deleteCategory: async (id) => {
    try {
      await service.delete(`/category/delete/${id}`);
    } catch (error) {
      console.error(`Error deleting category with id ${id}:`, error);
      throw error;
    }
  }
};

export default categoryService;
