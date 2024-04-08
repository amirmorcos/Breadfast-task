import {PostCard} from 'models/postCard';

export type MainStackParamsList = {
  Home: undefined;
  PostDetails: {post: PostCard};
};
