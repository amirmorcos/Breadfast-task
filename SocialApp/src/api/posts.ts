import {Post} from 'models/post';
import api from './index';

class PostsApi {
  getPostsList = async () => {
    const response = await api.get('posts');
    return response.data as Post[];
  };
}

export default new PostsApi();
