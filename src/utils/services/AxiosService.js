import AxiosInstance from './AxiosInstance';

const AxiosService = {
  getTokenPrice: (formData) => {
    return AxiosInstance.put('/avalanche/price/usdt', formData, {
      withCredentials: true
    });
  }
};
export default AxiosService;
