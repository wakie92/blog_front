export const formatDate = (dateData: string) => {
  const formatted: Date = new Date(dateData);
  console.log(dateData);
  const year: number = formatted.getFullYear();
  let month: number | string = formatted.getMonth() + 1;
  let day: number | string = formatted.getDate();
  month = Number(month) < 10 ? `0${month}` : month;
  day = Number(day) < 10 ? `0${day}` : day;

  return `${year}년 ${month}월 ${day}일`;
};  

export const setItem = (key: string, obj: object) => {
  return sessionStorage.setItem(key, JSON.stringify(obj));
};

export const getItem = (key: string) => {
  return sessionStorage.getItem(JSON.parse(key));
};

export const removeExp = (str: string) => {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  console.log(str);
  if(regExp.test(str)) {
    const result = str.replace(regExp, '');
    return result;
  } return str;
} 