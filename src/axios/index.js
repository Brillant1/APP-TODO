import axios from 'axios';
import { authStore } from '@/store';
import { useToast } from 'vue-toastification'
import router from '@/router';
const createAxiosInstance = (baseURL) => {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    function (config) {
      const store = authStore();
      const token = store.getToken ? store.getToken : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
    
  );
  

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
      function (error) {
        // User is not authorize to access to resource
        if (error.response.status == 401) {
          const store = authStore();
          store.logout();

          // useToast().error('Veuillez vous connecter pour continuer')
        } else if (error.response.status == 404) {
          // Resource not found
        }
        return Promise.reject(error);
      }
  );

  return axiosInstance;
};

// const axiosInstance = createAxiosInstance('http://127.0.0.1:8000/api/');
const axiosInstance = createAxiosInstance('https://mcfsp-uac.portedevie.com/api/');
export default axiosInstance;
