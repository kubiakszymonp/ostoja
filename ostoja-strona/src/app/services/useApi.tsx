import { BaseAPI, Configuration, HomepageApi } from "@/api";

type Constructor<T = {}> = new (...args: any[]) => T;

const BASE_PATH = "http://strapi:1337/api";

export const useApi = <T extends BaseAPI>(
  api: Constructor<T>,
  fetchOptions?: {
    cache?: RequestCache;
    next?: NextFetchRequestConfig;
  }
): T => {
  // Create a modified version of fetch that applies the fetchOptions
  const customFetch: typeof fetch = async (input, init) => {
    const modifiedInit: RequestInit = {
      ...init,
      ...fetchOptions 
    };
    return fetch(input, modifiedInit);
  };

  // Create an instance of the API class with the custom fetch function
  const instance = new api(
    new Configuration({ fetchApi: customFetch, basePath: BASE_PATH })
  );
  return instance;
};
