import { useAxios } from '.';

/**
 * Provides a consistent way to handle requests with axios.
 * Triggers events and state changes to identify loading, progress and errors.
 * @returns Axios hooks to make requests.
 */
export const useApi = () => {
  const axios = useAxios({ baseURL: process.env.REACT_APP_API_URL });

  return axios;
};
