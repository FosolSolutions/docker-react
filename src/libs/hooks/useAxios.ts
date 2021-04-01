import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

export const useAxios = (config?: AxiosRequestConfig) => {
  const _axios = React.useMemo(() => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    Object.assign(axios.defaults, { ...axios.defaults, ...config });
    return axios;
  }, [config]);

  return _axios;
};

export default useAxios;
