import { Post } from './../../store/modules/post/types';
import { Get } from './axios';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const SERVER = 'http://localhost:4000';

export const getLoginTest = async (config: AxiosRequestConfig) => {
  const endpoint = `${SERVER}/users`;
  const res: string = await Get<string>(endpoint, config);
  return res;
}

export const GetPostsList = async () => {
  const endpoint = `${SERVER}/posts`;
  const response = await axios.get<Post[]>(
    endpoint
  );
  return response.data;
};

export const PostUpdate = async (data: Post) => {
  const endpoint = `${SERVER}/posts`;
  const response = await axios.post<Post>(
    endpoint,
    data
  )
  return response.data;
}
// export async function getLogin({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }): Promise<LoginType> {
//   // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
//   const response: AxiosResponse<LoginType> = await Axios({
//     method: 'POST',
//     url: 'http://13.125.208.46/v1/users',
//     data: { email, password },
//   });
//   return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
// }

export type LoginType = {
  message: string;
};

