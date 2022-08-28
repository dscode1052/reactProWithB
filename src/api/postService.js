import axios from 'axios';

const POST_BASE_URL = '/api/posts';

// export const postBaseUrl = axios.create({
//   // baseURL: 'https://jsonplaceholder.typicode.com'
//   baseURL: '/api'
// });

export const getPostAll = async () => {
  const response = await axios.get(`${POST_BASE_URL}`);
  
  return response.data;
}

export const getPostDetailPage = async (param = 1) => {
  // const response = await postBaseUrl.get(`/posts/${param}`);
  const response = await axios.get(`${POST_BASE_URL}/${param}`);
  
  return response.data;
}

// export const getPostPage = async (pageParam = 1) => {
//   const response = await postBaseUrl.get(`/posts?_page=${pageParam}`);
  
//   return response.data;
// }