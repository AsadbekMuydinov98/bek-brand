import { service } from ".";

export default {
  Login: (user) => service.post('/auth/login', user),
  Signup: (user) => service.post('auth/register', user),
  Profile: () => service.get('/auth/profile')
}