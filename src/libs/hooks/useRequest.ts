import { AxiosResponse } from 'axios';
import React from 'react';
import { onRequest, onResponse, useAppDispatch } from 'store';

/**
 * Hook to return shared function that handles requests, state and errors.
 * @param param1
 * @returns
 */
export const useRequest = <RT>() => {
  const dispatch = useAppDispatch();

  return React.useCallback(
    async ({ url, request }: { url?: string; request?: () => Promise<AxiosResponse<RT>> }) => {
      dispatch(onRequest(url ?? 'request'));
      try {
        if (request) return await request();
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        dispatch(onResponse(url ?? 'request'));
      }
    },
    [dispatch],
  );
};

export default useRequest;
