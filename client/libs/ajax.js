/* eslint-disable */
import axios from 'axios';

const APIURL = 'http://localhost:8080/api/v1';

export default function request(method, path, data = {}) {
  const headers = {
    'Content-type': 'text/plain;charset=UTF-8',
  };
  return axios({
    method,
    headers,
    url: `${APIURL}/${path}`,
    data,
  });
}
