import React from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAxios } from '.';

export interface IRequestParams {
  // Request URL
  url: string;
  // Axios request configuration.
  config?: AxiosRequestConfig;
}

export interface IBodyRequestParams<RT> extends IRequestParams {
  // The data to send with the request.
  data: RT;
}

/**
 * Provides a consistent way to handle requests with axios.
 * Triggers events and state changes to identify loading, progress and errors.
 * @returns Axios hooks to make requests.
 */
export const useApi = () => {
  const axios = useAxios({ baseURL: process.env.REACT_APP_API_URL });

  /**
   * Make a GET request to fetch the specified 'RT' type data.
   * Automatically handles error responses.
   */
  const _get = React.useCallback(
    async <RT>({ url, config }: IRequestParams): Promise<AxiosResponse<RT>> => {
      return await axios.get<RT>(url, config);
    },
    [axios],
  );

  /**
   * Make a POST request to send the specified 'RT' type data.
   * Automatically handles error responses.
   */
  const _post = React.useCallback(
    async <RT>({ url, data, config }: IBodyRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await axios.post<RT>(url, data, config);
    },
    [axios],
  );

  /**
   * Make a PUT request to send the specified 'RT' type data.
   * Automatically handles error responses.
   */
  const _put = React.useCallback(
    async <RT>({ url, data, config }: IBodyRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await axios.put<RT>(url, data, config);
    },
    [axios],
  );

  /**
   * Make a DELETE request to send the specified 'RT' type data.
   * Automatically handles error responses.
   */
  const _delete = React.useCallback(
    async <RT>({ url, data, config }: IBodyRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await axios.delete<RT>(url, { data, ...config });
    },
    [axios],
  );

  const api = React.useMemo(
    () => ({
      get: _get,
      post: _post,
      put: _put,
      delete: _delete,
    }),
    [_get, _post, _put, _delete],
  );

  return api;
};
