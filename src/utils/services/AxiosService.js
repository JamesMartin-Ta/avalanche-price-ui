import AxiosInstance from './AxiosInstance';

const AxiosService = {
  getTokenPrice: (formData) => {
    return AxiosInstance.put('/avalanche/price/usdt', formData);
  }
};
export default AxiosService;
