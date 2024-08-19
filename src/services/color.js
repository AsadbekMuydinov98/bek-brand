import { service } from '.'; 

const baseURL = '/color';

const colorService = {
  getColors: async () => {
    try {
      const response = await service.get(`${baseURL}/get-all`);
      return response;
    } catch (error) {
      console.error('Error fetching colors:', error);
      throw error;
    }
  },

  // Fetch a single color by ID
  getColorById: async (id) => {
    try {
      const response = await service.get(`${baseURL}/get/${id}`);
      return response;
    } catch (error) {
      console.error('Error fetching color by ID:', error);
      throw error;
    }
  },

  // Create a new color
  createColor: async (colorData) => {
    try {
      const response = await service.post(`${baseURL}/create`, colorData);
      return response;
    } catch (error) {
      console.error('Error creating color:', error);
      throw error;
    }
  },

  // Update an existing color
  updateColor: async (id, colorData) => {
    try {
      const response = await service.put(`${baseURL}/update/${id}`, colorData);
      return response;
    } catch (error) {
      console.error('Error updating color:', error);
      throw error;
    }
  },

  // Delete a color
  deleteColor: async (id) => {
    try {
      const response = await service.delete(`${baseURL}/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting color:', error);
      throw error;
    }
  },
};

export default colorService;
