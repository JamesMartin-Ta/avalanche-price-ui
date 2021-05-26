import AxiosInstance from './AxiosInstance';

const AxiosService = {
  getTokenPrice: (formData) => {
    return AxiosInstance.put('/avalanche/price/usdt', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
export default AxiosService;
