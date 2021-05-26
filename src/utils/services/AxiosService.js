import AxiosInstance from './AxiosInstance';

const AxiosService = {
  getTokenPrice: (formData) => {
    return AxiosInstance.post('/avalanche/price/usdt', formData);
  }
};
export default AxiosService;
