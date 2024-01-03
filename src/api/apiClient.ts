import axios, { AxiosRequestConfig, CanceledError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.4/game-hub/src/api",
});

class PHPAPICLIENT<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string, config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint + "/" + id, config)
      .then((res) => res.data);
  };

  post = (data: any, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post<T[]>(this.endpoint, data, config)
      .then((res) => res.data);
  };

  delete = (id: number | string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .delete<T[]>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export { CanceledError };

export default PHPAPICLIENT;
