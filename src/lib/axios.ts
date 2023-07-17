import { API_URL } from '@env';
import { AuthStorage } from '@storage/auth-storage';
import axios, { AxiosInstance } from 'axios';

type RegisterInterceptorTokenProps = {
   signOut: () => void;
   updateRefreshToken: (token: string) => void;
};

type APIIntanceProps = AxiosInstance & {
   registerInterceptorToken: ({
      signOut,
      updateRefreshToken
   }: RegisterInterceptorTokenProps) => () => void;
};

export const publicAPI = axios.create({
   baseURL: API_URL
});

export const privateAPI = axios.create({
   baseURL: API_URL
}) as APIIntanceProps;

privateAPI.registerInterceptorToken = ({ signOut, updateRefreshToken }) => {
   const interceptorToken = privateAPI.interceptors.response.use(
      (response) => response,
      (requestError) =>
         new Promise(async (resolver, reject) => {
            if (requestError?.response?.status === 401) {
               if (
                  requestError?.response?.data?.status ===
                     'Authorization Token not found' &&
                  !requestError.retry
               ) {
                  requestError.retry = true;

                  const token = await AuthStorage.retrieveToken();
                  const originalRequest = requestError.config;

                  if (!token) {
                     signOut();
                     reject(requestError);
                  }

                  try {
                     const { data } = await publicAPI.get('refresh', {
                        headers: { Authorization: `Bearer ${token}` }
                     });

                     privateAPI.defaults.headers[
                        'Authorization'
                     ] = `Bearer ${data.access_token}`;

                     await AuthStorage.saveToken(data.access_token);
                     updateRefreshToken(data.access_token);

                     originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
                     return axios(originalRequest).then((res) => resolver(res));
                  } catch (error) {
                     signOut();
                     reject(requestError);
                  }
               } else {
                  signOut();
                  reject(requestError);
               }
            }

            reject(requestError);
         })
   );

   return () => privateAPI.interceptors.response.eject(interceptorToken);
};
