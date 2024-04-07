import {User} from 'models/user';
import api from './index';
class UsersApi {
  getUsers = async () => {
    const response = await api.get('users', {
      params: {
        page: 1,
        ['per_page']: 20,
      },
    });
    return response.data as User[];
  };
}

export default new UsersApi();
