import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const userService = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${baseURL}/auth/get-users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
};

export default userService;
