const getBaseApi = (src: string, isEncoded: boolean): string => {
  if (src === 'localhost') {
    return isEncoded
      ? 'http%3A%2F%2Flocalhost%3A3000%2Fsignin'
      : 'http://localhost:3000/signin';
  } else {
    return isEncoded
      ? 'https%3A%2F%2Farmistrice.github.io%2Fsignin'
      : 'https://armistrice.github.io/signin';
  }
};

export default getBaseApi;
