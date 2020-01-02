export const formatDate = (date: string) => {
  const formatted = date.split('.');
  console.log(formatted)
  const month = Number(formatted[1]) < 10 ? `0${formatted[1]}` : formatted[1];
  const day = Number(formatted[2]) < 10 ? `0${formatted[2]}` : formatted[2];

  return  `${formatted[0]}년 ${month}월 ${day}일`;
}

export const setItem = (key: string, obj: object) => {
  return sessionStorage.setItem(key, JSON.stringify(obj));
};

export const getItem = (key: string) => {
  return sessionStorage.getItem(JSON.parse(key));
}