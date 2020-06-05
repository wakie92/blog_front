import firebase, { provider } from '../../config/init-firebase';

export const formatDate = (dateData: string) => {
  const formatted: Date = new Date(dateData);
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
  if(regExp.test(str)) {
    const result = str.replace(regExp, '');
    return result;
  } return str;
} 


export const logoutFn = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    sessionStorage.removeItem("idToken");
  }).catch(function(error) {
    // An error happened.
  });
}

export const  setCookie = (name: string, value: any, day: number) => {
  const date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  console.log(document.cookie);
};

export const deleteCookie = (name: string) => {
  const date = new Date();
  document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
  console.log("delete");
}

export const checkUser = async () => {
  const user = await firebase.auth().currentUser;
  return user;
}

export const loginEmail = (email: string, password: string) => {
  const result = firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const token = JSON.stringify(res.user);
      setCookie("token", token, 1);
      sessionStorage.setItem("idToken", token);
      return res
  }).catch(err =>  console.log(err));
  return result;
}



export const checkLogin = () => {
  const tokenObj = document.cookie;
  const isToken = JSON.parse(tokenObj)
  return isToken;
}
