import Axios from 'axios';

const api = Axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {},
  timeout: 5000,
});

export {api};
