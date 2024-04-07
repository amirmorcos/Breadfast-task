import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import PostsApi from 'api/posts';
import UsersApi from 'api/users';
import {PostCard} from 'models/postCard';

interface PostsState {
  posts: PostCard[];
  loading: boolean;
}

const initialState = {
  posts: [],
  loading: true,
} satisfies PostsState as PostsState;

export const fetchPostsList = createAsyncThunk('posts/fetchList', async () => {
  const response = await PostsApi.getPostsList();
  const usersResponse = await UsersApi.getUsers();
  const postsData = response.map(post => {
    const userData = usersResponse.find(user => user.id === post.user_id);
    return {
      ...post,
      name: userData?.name || '',
    };
  });
  return postsData;
});

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPostsList.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPostsList.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export default PostsSlice.reducer;
