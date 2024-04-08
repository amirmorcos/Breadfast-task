import {PostCard} from 'models/postCard';

export type PostsListProps = {
  data: PostCard[];
  onRetry: () => void;
};
