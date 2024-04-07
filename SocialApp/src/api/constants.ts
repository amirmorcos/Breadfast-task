const Urls = {
  BASE_URLS: 'https://gorest.co.in/public/v2/',
  POSTS: 'posts',
  COMMENTS: (postId: number) => `posts/${postId}/comments`,
  USERS: 'users',
};

export default Urls;
