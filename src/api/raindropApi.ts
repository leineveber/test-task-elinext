import getBaseApi from './getBaseApi';

export const CLIENT_ID: string = '60ec694880f11a82952b1cb4';
export const CLIENT_SECRET: string = '963d4d0a-4e97-4f41-9624-198698353c6b';
export const GRANT_TYPE: string = 'authorization_code';

export const RAINDROP_BASE_API: string = `https://api.raindrop.io/v1/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${getBaseApi(
  'localhost',
  true
)}`;
export const RAINDROP_ACCESS_API: string =
  'https://raindrop.io/oauth/access_token';
