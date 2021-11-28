import axios, { AxiosResponse } from "axios";
import { Activity } from '../models/activity';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async res => {
    try {
        await sleep(1000);
        return res
    } catch (err) {
        console.log(err)
        return await Promise.reject(err)
    }
});

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
};

const Activities = {
    list: () => requests.get<Activity[]>('/activities')
};

const agent = {
    Activities
}

export default agent;