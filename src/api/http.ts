import axios from 'axios';

const http = async (options: any) => {
  const response = await axios(options);

  return response;
};

export default http;
