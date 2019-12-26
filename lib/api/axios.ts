import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const processRes = <T>(res: AxiosResponse<T>) => {
  try {
    const failed = res.status !== 200
    const { data } = res;
    if (failed) {
      return {
        status: res.status,
        result: res.statusText,
      }
    }
    return data;
  } catch (e) {
    return e;
  }
}

export const Get = async <T>(url:string , config: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse<T> = await axios.get(url, config);
    return processRes(res);
  } catch (e) {
    return e;
  }
};

export const Post = async <T>(url:string , config: AxiosRequestConfig) => {
  try {
    const data = {};
    const res: AxiosResponse<T> = await axios.post(url, data, config);
    return processRes(res);
  } catch (e) {
    return e;
  }
};

export const Put = async <T>(url:string , config: AxiosRequestConfig) => {
  try {
    const data = {};
    const res: AxiosResponse<T> = await axios.put(url, data, config);

    return processRes(res);
  } catch (e) {
    return e;
  }
};

export const Delete = async <T>(url:string , config: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse<T> = await axios.delete(url, config);
    return processRes(res);
  } catch (e) {
    return e;
  }
};

