import dotenv from 'dotenv';

dotenv.config();

/**
 * env ignore 처리로 인해 주석으로 남김
 * REACT_APP_API_URL=https://node.wingeat.com/test-api/
 * REACT_APP_IMG_URL=https://image.wingeat.com/
 */
export default {
  API_URL: process.env.REACT_APP_API_URL || 'https://node.wingeat.com/test-api/',
  IMG_URL: process.env.REACT_APP_IMG_URL || 'https://image.wingeat.com/'
};