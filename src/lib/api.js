import axios from 'axios';
import config from '@config';

const client = axios.create();
const {API_URL} = config;

export const getCarousel = () => client.get(`${API_URL}features`);
export const getList = (pageNum = 1) => client.get(`${API_URL}items?page=${pageNum}`);

export default client;