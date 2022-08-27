import axios from 'axios';

export const postBaseUrl = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPostAll = async () => {
  const response = await postBaseUrl.get('/posts');
  
  return response.data;
}

export const getPostPage = async (pageParam = 1) => {
  const response = await postBaseUrl.get(`/posts?_page=${pageParam}`);
  
  return response.data;
}