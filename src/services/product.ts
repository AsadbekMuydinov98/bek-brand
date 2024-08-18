import { service } from '.';

const API_URL = '/product';

const productService = {
  getProducts: async () => {
    try {
      const response = await service.get(`${API_URL}/get`);
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const response = await service.get(`${API_URL}/get-one/${id}`);
      return response;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await service.delete(`${API_URL}/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },

  createProduct: async (productData) => {
    try {
      const formData = new FormData();
      for (const key in productData) {
        if (key === 'images') {
          productData.images.forEach((image, index) => {
            formData.append(`images[${index}]`, image.originFileObj);
          });
        } else {
          formData.append(key, productData[key]);
        }
      }

      const response = await service.post(`${API_URL}/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const formData = new FormData();
      for (const key in productData) {
        if (key === 'images') {
          productData.images.forEach((image, index) => {
            formData.append(`images[${index}]`, image.originFileObj);
          });
        } else {
          formData.append(key, productData[key]);
        }
      }

      const response = await service.put(`${API_URL}/edit/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },
};

export default productService;
