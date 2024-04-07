import {Post} from 'models/post';
import api from './index';

class PostsApi {
  getPostsList = async () => {
    const response = await api.get('posts');
    return response.data as Post[];
  };
  getComments = async (postId: number) => {
    const response = await api.get(`posts/${postId}/comments`);
    return response.data;
  };
}

export default new PostsApi();
