import axios, { AxiosRequestConfig, CanceledError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.7/game-hub/src/api",
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

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export { CanceledError };

export default PHPAPICLIENT;
