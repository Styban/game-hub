import axios, {AxiosRequestConfig, CanceledError} from "axios";

export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[];
}

 const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '124ac2ad06834a5bb5ac848150effb4e'
    }
})

class APICLIENT<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance
        .get<T>(this.endpoint + "/" + id)
        .then(res => res.data)
    }
}

export {CanceledError};

export default APICLIENT;