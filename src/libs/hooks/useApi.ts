import React from 'react';
import { AxiosResponse } from 'axios';
import { useRequest, useAxios } from '.';

export interface IRequestParams<RT> {
  // Request URL
  url: string;
  // The axios request to make.
  action: (response: AxiosResponse<RT>) => any;
}

export interface IBodyRequestParams<RT> extends IRequestParams<RT> {
  // The data to send with the request.
  data: RT;
}

/**
 * Provides a consistent way to handle requests with axios.
 * Triggers events and state changes to identify loading, progress and errors.
 * @returns Axios hooks to make requests.
 */
export const useApi = () => {
  const request = useRequest();
  const axios = useAxios({ baseURL: process.env.REACT_APP_API_URL });

  /**
   * Make a GET request to fetch the specified 'RT' type data.
   */
  const _get = React.useCallback(
    async <RT>({ url, action }: IRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await request({
        url,
        request: async () => {
          const res = await axios.get<RT>(url);
          action(res);
          return res;
        },
      });
    },
    [axios, request],
  );

  /**
   * Make a POST request to send the specified 'RT' type data.
   */
  const _post = React.useCallback(
    async <RT>({ url, data, action }: IBodyRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await request({
        url,
        request: async () => {
          const res = await axios.post<RT>(url, data);
          action(res);
          return res;
        },
      });
    },
    [axios, request],
  );

  /**
   * Make a PUT request to send the specified 'RT' type data.
   */
  const _put = React.useCallback(
    async <RT>({ url, data, action }: IBodyRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await request({
        url,
        request: async () => {
          const res = await axios.put<RT>(url, data);
          action(res);
          return res;
        },
      });
    },
    [axios, request],
  );

  /**
   * Make a DELETE request to send the specified 'RT' type data.
   */
  const _delete = React.useCallback(
    async <RT>({ url, data, action }: IBodyRequestParams<RT>): Promise<AxiosResponse<RT>> => {
      return await request({
        url,
        request: async () => {
          const res = await axios.delete<RT>(url, { data });
          action(res);
          return res;
        },
      });
    },
    [axios, request],
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
