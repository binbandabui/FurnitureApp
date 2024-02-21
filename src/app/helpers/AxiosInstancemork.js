import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstancemork = (contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL: 'https://65c0bfd6dc74300bce8cac9c.mockapi.io',
  });

  axiosInstance.interceptors.request.use(
    async config => {
      // const token = await AsyncStorage.getItem('token');
      const token = '';
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err),
  );
  return axiosInstance;
};

export default AxiosInstancemork;
