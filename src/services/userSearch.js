import axios from 'axios';

const searchApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export default searchApi;