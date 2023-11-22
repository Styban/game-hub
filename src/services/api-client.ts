import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '124ac2ad06834a5bb5ac848150effb4e'
    }
})