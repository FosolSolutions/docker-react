import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';
import { useAppDispatch, onRequest, onResponse, onError } from 'store';

/**
 * Provides a consistent way to handle requests with axios.
 * Triggers events and state changes to identify loading, progress and errors.
 * @param config
 * @returns
 */
export const useAxios = (config?: AxiosRequestConfig) => {
  const dispatch = useAppDispatch();

  return React.useMemo(() => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    Object.assign(axios.defaults, { ...axios.defaults, ...config });

    axios.interceptors.request.use((config) => {
      dispatch(onRequest(config.url ?? config.method ?? 'request'));
      return config;
    });

    axios.interceptors.response.use(
      (response) => {
        dispatch(onResponse(response.config?.url ?? response.config?.method ?? 'request'));
        return response;
      },
      (error) => {
        // Wrapping the error is required because axios triggers the error twice if it returns a rejected promise.
        // Even more annoyingly it will fire the response if it returns a resolved promise.
        if (!error.wrap) {
          dispatch(
            onResponse(error.response?.config?.url ?? error.response?.config?.method ?? 'request'),
          );
          dispatch(
            onError({
              message: error.message,
              status: error.response.status,
              statusText: error.response.statusText,
              details: error.response.data?.message,
            }),
          );
          return Promise.reject({ wrap: true, error });
        }

        return Promise.reject(error.error);
      },
    );
    return axios;
  }, [config, dispatch]);
};

export default useAxios;
