import axios from 'axios';

const axiosOptions = {
  baseURL: 'https://jsonplaceholder.typicode.com',
};

const http = axios.create(axiosOptions);

// https://jsonplaceholder.typicode.com/posts
export const getPosts = () => http.get('/posts');

export const createPost = post => http.post('/posts', post);

export const updatePost = (id, post) => http.put(`/posts/${id}`, post);

export const deletePost = id => http.delete(`/posts/${id}`);
