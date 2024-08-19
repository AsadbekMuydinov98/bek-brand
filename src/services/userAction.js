// import axios from 'axios';

// const baseURL = 'http://localhost:8080/api';

// const userAction = {
//   addFavourite: async (productId, userId) => {
//     try {
//       const response = await axios.post(`${baseURL}/cart/add-favourite`, { productId, userId });
//       return response.data;
//     } catch (error) {
//       console.error('Error adding to favourites:', error);
//       throw error;
//     }
//   },

//   addToCart: async (productId, userId) => {
//     try {
//       const response = await axios.post(`${baseURL}/cart/add-to-cart`, { productId, userId });
//       return response.data;
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       throw error;
//     }
//   },

//   removeFromCart: async (userId, productId) => {
//     try {
//       const response = await axios.post(`${baseURL}/cart/remove-from-cart`, { productId, userId });
//       return response.data;
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//       throw error;
//     }
//   },

//   getCart: async (id) => {
//     try {
//       const response = await axios.get(`${baseURL}/cart/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       throw error;
//     }
//   },

//   addToFavorites: async (productId, userId) => {
//     try {
//       const response = await axios.post(`${baseURL}/cart/add-to-favorites`, { productId, userId });
//       return response.data;
//     } catch (error) {
//       console.error('Error adding to favorites:', error);
//       throw error;
//     }
//   },
//   removeFromFavorites: async (productId, userId) => {
//     try {
//       const response = await axios.post(`${baseURL}/cart/remove-from-favorites`, { productId, userId });
//       return response.data;
//     } catch (error) {
//       console.error('Error removing from favorites:', error);
//       throw error;
//     }
//   },
//   getFavorites: async (userId) => {
//     try {
//       const response = await axios.get(`${baseURL}/cart/favorites/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching favorites:', error);
//       throw error;
//     }
//   }
// };

// export default userAction;


import { service } from '.'; // Yangi service import qilish

const userAction = {
  addFavourite: async (productId, userId) => {
    try {
      const response = await service.post('/cart/add-favourite', { productId, userId });
      return response;
    } catch (error) {
      console.error('Error adding to favourites:', error);
      throw error;
    }
  },

  addToCart: async (productId, userId) => {
    try {
      const response = await service.post('/cart/add-to-cart', { productId, userId });
      return response;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  },

  removeFromCart: async (userId, productId) => {
    try {
      const response = await service.post('/cart/remove-from-cart', { productId, userId });
      return response;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  },

  getCart: async (id) => {
    try {
      const response = await service.get(`/cart/${id}`);
      return response;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  },

  addToFavorites: async (productId, userId) => {
    try {
      const response = await service.post('/cart/add-to-favorites', { productId, userId });
      return response;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw error;
    }
  },

  removeFromFavorites: async (productId, userId) => {
    try {
      const response = await service.post('/cart/remove-from-favorites', { productId, userId });
      return response;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw error;
    }
  },

  getFavorites: async (userId) => {
    try {
      const response = await service.get(`/cart/favorites/${userId}`);
      return response;
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw error;
    }
  }
};

export default userAction;
