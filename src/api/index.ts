import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todolist-api.hexschool.io'
});

export { api };
