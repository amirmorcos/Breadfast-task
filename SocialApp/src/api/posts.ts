import {Post} from 'models/post';
import api from './index';
import Urls from './constants';

class PostsApi {
  getPostsList = async () => {
    const response = await api.get(Urls.POSTS, {
      params: {
        page: 1,
        ['per_page']: 10,
      },
    });
    return response.data as Post[];
  };
  getComments = async (postId: number) => {
    const response = await api.get(Urls.COMMENTS(postId));
    return response.data;
  };
}

export default new PostsApi();
