import axios from 'axios';

import { BASE_URL } from './baseUrl';

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
