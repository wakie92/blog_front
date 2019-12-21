import Axios, { AxiosResponse } from 'axios';

export async function getLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginType> {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response: AxiosResponse<LoginType> = await Axios({
    method: 'POST',
    url: 'http://13.125.208.46/v1/users',
    data: { email, password },
  });
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}

export type LoginType = {
  message: string;
};
